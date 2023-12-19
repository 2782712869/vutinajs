import isFunction from '../fn/isFunction';

const partial = <T, R>(func: (...args: T[]) => R, ...rest: T[]) => {
  if (!isFunction(func)) {
    throw new Error('func must be a function');
  }
  return (...args: T[]) => {
    return func(...rest, ...args);
  };
};

export default partial;
