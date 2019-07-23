# Generated by Django 2.2.3 on 2019-07-22 19:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0002_add_file_sources_and_operations'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileupdateoperation',
            name='scheduled',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='fileupdateoperation',
            name='started',
            field=models.DateTimeField(null=True),
        ),
    ]
