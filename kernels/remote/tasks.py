from django.db import transaction
from django.utils import timezone

from . import backends
from .exceptions import RemoteOperationMissing, ExecutionError
from .models import RemoteOperation


def execute_remote_operation(pk):
    """
    A task to execute a remote operation and store the result
    in a file under the provided name.

    TODO: make this a background task
    """
    operation_queryset = RemoteOperation.objects.filter(pk=pk)
    # first check if there is a remote operation on file
    # to catch transaction issues or other side effects
    operation = operation_queryset.first()
    if operation is None:
        with transaction.atomic():
            # TODO: figure out a good exception here
            # then update the remote operation that it's running
            operation_queryset.update(status=RemoteOperation.STATUS_FAILED, failed_at=timezone.now())
            raise RemoteOperationMissing

    with transaction.atomic():
        # then update the remote operation that it's running
        operation_queryset.update(status=RemoteOperation.STATUS_RUNNING, started_at=timezone.now())

    # instantiate the backend for the given operation
    backend = backends.get_backend(operation.backend)

    # then execute the remote operation with the given snippet and all other
    # parameters
    try:
        result = backend.execute_operation(
            snippet=operation.snippet, **operation.parameters
        )
    except Exception as exc:
        with transaction.atomic():
            operation_queryset.update(status=RemoteOperation.STATUS_FAILED, failed_at=timezone.now())
            raise ExecutionError from exc

    # and safe the result as a Iodide file, the result should be a
    # memory effecient iterator, e.g. a streaming response
    backend.save_result(operation, result)

    with transaction.atomic():
        # then update the remote operation that it was completed
        operation_queryset.update(status=RemoteOperation.STATUS_COMPLETED, ended_at=timezone.now())
