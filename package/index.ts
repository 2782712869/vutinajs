// number
export { default as isNaN } from './number/isNaN';
export { default as isNumber } from './number/isNumber';

// string
export { default as isString } from './string/isString';
export { default as concatStr } from './string/concatStr';
export { default as includeStr } from './string/includeStr';
export { default as indexOfStr } from './string/indexOfStr';
export { default as replace } from './string/replace';
export { default as sliceStr } from './string/sliceStr';
export { default as split } from './string/split';
export { default as trim } from './string/trim';

// math
export { default as max } from './math/max';
export { default as min } from './math/min';
export { default as sum } from './math/sum';

// collect
export { default as countBy } from './collect/countBy';
export { default as each } from './collect/each';
export { default as every } from './collect/every';
export { default as filter } from './collect/filter';
export { default as map } from './collect/map';
export { default as reduce } from './collect/reduce';
export { default as pluck } from './collect/pluck';

// array
export { default as chunk } from './array/chunk';
export { default as concat } from './array/concat';
export { default as isArray } from './array/isArray';
export { default as join } from './array/join';
export { default as take } from './array/take';
export { default as union } from './array/union';
export { default as includes } from './array/includes';
export { default as flatten } from './array/flatten';

// object
export { default as isNull } from './object/isNull';
export { default as isUndefined } from './object/isUndefined';
export { default as isObject } from './object/isObject';
export { default as isEmpty } from './object/isEmpty';
export { default as isEqual } from './object/isEqual';
export { default as keys } from './object/keys';
export { default as values } from './object/values';
export { default as has } from './object/has';
export { default as pick } from './object/pick';
export { default as omit } from './object/omit';

// fn
export { default as isFunction } from './fn/isFunction';
export { default as delay } from './fn/delay';
export { default as once } from './fn/once';
export { default as deepClone } from './fn/deepClone';
export { default as debounce } from './fn/debounce';
export { default as throttle } from './fn/throttle';

// fp
export { default as identity } from './fp/identity';
export { default as memoize } from './fp/memoize';
export { default as pipe } from './fp/pipe';
export { default as compose } from './fp/compose';
export { default as curry } from './fp/curry';
export { default as partial } from './fp/partial';

// functor
export { default as IO } from './functor/IO';
export { default as Task } from './functor/Task';
export { default as Ap } from './functor/AP';
export { default as Monad } from './functor/Monad';
export { default as Maybe } from './functor/Maybe';
export { default as Functor } from './functor/Functor';
export { default as Either } from './functor/Either';
