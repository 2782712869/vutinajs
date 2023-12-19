import isFunction from '../fn/isFunction';
import { FullType } from '../utilis/types';

const memoize = <T, R extends Record<string | symbol, FullType>>(
  id: string | symbol,
  fn: (...args: T[]) => R,
) => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function');
  }
  const cache: Record<string | symbol, FullType> = {};
  return (...rest: T[]) => {
    if (!cache[id]) {
      cache[id] = fn(...rest);
    }
    return cache[id];
  };
};

export default memoize;
