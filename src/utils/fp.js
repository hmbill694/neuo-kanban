// curry function
const curry = (fn) => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...moreArgs) => curry(fn)(...args, ...moreArgs);

// function compositions tools
const compositionFunction = (acc, fn, index) =>
  index !== 0 ? fn(acc) : fn.length > 1 ? fn(...acc) : fn(acc);

const pipe = (...fns) => (...vals) => fns.reduce(compositionFunction, ...vals);
const compose = (...fns) => (...vals) =>
  fns.reduceRight(compositionFunction, ...vals);

// combinators
const id = (x) => x;
const constant = (x) => (y) => x;
const apply = curry((fn, data) => fn(data));
const thrush = curry((data, fn) => fn(data));

// logic
const cond = curry((functionPairs, data) => {
  for (const [pred, trans] of functionPairs) {
    if (pred(data)) return trans(data);
  }
  return undefined;
});

const and = curry((predicates, value) => {
  for (const iterator of predicates) {
    if (!iterator(value)) return false;
  }
  return true;
});

const or = curry((predicates, value) => {
  for (const iterator of predicates) {
    if (iterator(value)) return true;
  }
  return false;
});

const ifElse = curry((pred, trueFn, falseFn, data) =>
  pred(data) ? trueFn(data) : falseFn(data)
);
const exists = (ele) => ele != null && !isNaN(ele);
const typeOf = (x) => typeof x;

// Equality

const isEqual = curry((ele1, ele2) => {
  const isPrimative = (ele) => {
    const primativeSet = new Set([
      "number",
      "bigint",
      "string",
      "symbol",
      "boolean",
      "function",
      "undefined",
    ]);

    return primativeSet.has(typeOf(ele))
  }

  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (const index in arr1.keys()) {
      if (!isEqual(arr1[index], arr2[index])) return false;
    }
    return true;
  };

  const objectsEqual = (obj1, obj2) => {
    if (obj1 === null && obj2 === null) return true;

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) return false;
    for (const ele of obj1Keys) {
      if (!(ele in obj2)) return false;
      if (!isEqual(obj1[ele], obj2[ele])) return false;
    }
    return true;
  };

  const output = cond(
    [
      [constant(typeof ele1 !== typeof ele2),                 constant(() => false)],
      [constant(isPrimative(ele1) && isPrimative(ele2)),      constant(() => ele1 === ele2)],
      [constant(Array.isArray(ele1) && Array.isArray(ele2)),  constant(() => arraysEqual(ele1, ele2))],
      [constant(true),                                        constant(() => objectsEqual(ele1, ele2))],
    ],
    undefined
  );

  return output();
});

// arrays/objects
const map = curry((fn, data) => Array.prototype.map.call(data, fn));

const reduce = curry((fn, acc, data) =>
  Array.prototype.reduce.call(data, fn, acc)
);

const filter = curry((fn, data) => Array.prototype.filter.call(data, fn));

const length = curry((data) => (exists(data.length) ? data.length : undefined));

const propExists = curry((key, object) => exists(object[key]));

const prop = curry((key, object) =>
  propExists(key, object) ? object[key] : undefined
);

const propEquals = ((key, value, object) => pipe(prop(key), isEqual(value))(object))

export { curry, pipe, compose, id, constant, thrush, apply, and, or, ifElse, cond, isEqual, map, filter, reduce, length, propExists, prop, propEquals };