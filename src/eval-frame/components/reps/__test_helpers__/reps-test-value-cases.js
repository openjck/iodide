export const simpleTypes = {
  simple_int: 232937,
  simple_float: 453.12312312,
  simple_zero: 0,
  simple_negative: -534.23,
  simple_exp: 10e55,
  simple_nan: NaN,
  simple_inf: Infinity,
  simple_emptyString: "",
  simple_string: "asjhdflkdskfhla",
  simple_boolTrue: true,
  simple_boolFalse: false,
  simple_undef: undefined,
  simple_null: null,
  simple_symbol: Symbol.for("test")
};

// ==================== longStrings

export const longStrings = {
  stringWithSpaces_100: "1234 ".repeat(20),
  stringWithSpaces_1000: "1234 ".repeat(200),
  stringWithSpaces_100000: "1234 ".repeat(20000),
  stringNoSpaces_100: "12345".repeat(20),
  stringNoSpaces_1000: "12345".repeat(200),
  stringNoSpaces_100000: "12345".repeat(20000)
};

// ==================== arrays

const N_ARRAY = 10000;

export const longValueArrays = {};
Object.keys(simpleTypes).forEach(type => {
  longValueArrays[`array_long_${type}`] = new Array(N_ARRAY).fill(
    simpleTypes[type]
  );
});
longValueArrays.array_long_mixed = new Array(1000)
  .fill(Object.values(simpleTypes))
  .reduce((a, b) => a.concat(b), []);

export const arrayBuffers = {
  buffer_arrayBuffer: new ArrayBuffer(N_ARRAY),
  buffer_dataView: new DataView(new ArrayBuffer(N_ARRAY), 0),
  typedArray_Int8Array: new Int8Array(N_ARRAY),
  typedArray_Uint8Array: new Uint8Array(N_ARRAY),
  typedArray_Uint8ClampedArray: new Uint8ClampedArray(N_ARRAY),
  typedArray_Int16Array: new Int16Array(N_ARRAY),
  typedArray_Uint16Array: new Uint16Array(N_ARRAY),
  typedArray_Int32Array: new Int32Array(N_ARRAY),
  typedArray_Uint32Array: new Uint32Array(N_ARRAY),
  typedArray_Float32Array: new Float32Array(N_ARRAY),
  typedArray_Float64Array: new Float64Array(N_ARRAY)
  // spec-ed, not yet implemented
  // BigInt64Array: new BigInt64Array(1000),
  // BigUint64Array: new BigUint64Array(1000)
};

// ==================== functions

function doublerFn(x) {
  return x * 2;
}

function nuller() {
  return null;
}

function arrayer(a, b, c, d, e) {
  return [a, b, c, d, e];
}

function* doublerGen(x, y, z) {
  for (let i = 0; i < 10; i++) {
    yield 2 * x + y + z;
  }
}
async function asyncDoublerFn(x) {
  return 2 * x;
}

export const functions = {
  // eslint-disable-next-line
  fn_anonymous: function(x) {
    return x * 2;
  },
  fn_arrow: x => x * 2,
  fn_named: doublerFn,
  fn_namedNoArgs: nuller,
  fn_namedManyArgs: arrayer,
  fn_namedGenerator: doublerGen,
  fn_namedAsync: asyncDoublerFn
};

// ==================== errors

export const errors = {
  error_baseError: new Error("test error message"),
  error_EvalError: new EvalError("test error message"),
  error_RangeError: new RangeError("test error message"),
  error_ReferenceError: new ReferenceError("test error message"),
  error_SyntaxError: new SyntaxError("test error message"),
  error_TypeError: new TypeError("test error message"),
  error_URIError: new URIError("test error message")
};

// ==================== base objects

export const baseObjects = {
  array_empty: [],
  object_empty: {},
  date: new Date("2000-01-01"),
  regex: /^.*$/,
  map: new Map([[1, "one"], [2, "two"], [3, "three"]]),
  map_empty: new Map(),
  set: new Set([1, 2, 3, 4, 5]),
  set_empty: new Set(),
  weakSet_empty: new WeakSet(),
  weakMap_empty: new WeakMap()
};

// ==================== arrays of base objects

export const arraysOfBaseObjects = {};
Object.keys(baseObjects).forEach(k => {
  arraysOfBaseObjects[`arrayOfObj_${k}`] = new Array(1000).fill(baseObjects[k]);
});

// ==================== composite objects

export const compositeObjects = {
  object_plainComposite1: {
    id: 2,
    name: "An ice sculpture",
    // "price": 12.50,
    tags: ["cold", "ice"],
    dimensions: {
      length: 7.0,
      width: 12.0,
      height: 9.5
    },
    warehouseLocation: {
      latitude: -78.75,
      longitude: 20.4
    }
  },

  object_plainComposite2: {
    glossary: {
      title: "example glossary",
      GlossDiv: {
        title: "S",
        GlossList: {
          GlossEntry: {
            ID: "SGML",
            SortAs: "SGML",
            GlossTerm: "Standard Generalized Markup Language",
            Acronym: "SGML",
            Abbrev: "ISO 8879:1986",
            GlossDef: {
              para:
                "A meta-markup language, used to create markup languages such as DocBook.",
              GlossSeeAlso: ["GML", "XML"]
            },
            GlossSee: "markup"
          }
        }
      }
    }
  },

  object_plainComposite3: {
    a1: 1,
    a2: "A2",
    a3: true,
    a4: undefined,
    a5: {
      "a5-1": null,
      "a5-2": ["a5-2-1", "a5-2-2"],
      "a5-3": {}
    },
    a6: () => {
      console.log("hello world");
    },
    a7: new Date("2005-04-03")
  }
};

// ==================== custom classes

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes an animal noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(`${name} the dog`);
  }

  speak() {
    console.log(`${this.name} makes an animal noise.`);
  }
}

export const customClassCases = {
  class_1: new Animal("Bob"),
  class_subclass: new Dog("Fido")
};

// ==================== tabular

export const rowTableCases = {
  rowsTable_plainObjects: new Array(100)
    .fill(0)
    .map((x, i) => ({ a: i, b: i, c: i })),
  rowsTable_compositeObjects: new Array(100).fill(compositeObjects),
  rowsTable_objectsContainingSimpleTypes: new Array(100).fill(simpleTypes),
  rowsTable_objectsContainingBaseObjects: new Array(100).fill(baseObjects)
};

export const rowTableFails = {
  array_oneEmptyObject: [{}],
  array_justOneObject: [{ a: 1, b: 2, c: 3 }],
  array_classInstances: new Array(100).fill(new Dog("Fido")),
  array_objectsWithAllDifferentKeys: new Array(100)
    .fill(0)
    .map((x, i) => ({ [`key_${i}`]: i, b: i, c: i })),
  array_objectsWithSomeDifferentKeys: new Array(100)
    .fill(0)
    .map((x, i) => ({ [`key_${i % 2}`]: i, b: i, c: i }))
};

// ==================== tests

export const allCases = Object.assign(
  {},
  simpleTypes,
  longStrings,
  longValueArrays,
  arrayBuffers,
  functions,
  errors,
  baseObjects,
  compositeObjects,
  customClassCases,
  rowTableCases,
  rowTableFails
);
