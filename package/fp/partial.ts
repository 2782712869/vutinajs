import isFunction from '../fn/isFunction';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const partial = (
  func: (...args: any[]) => any,
  ...rest: Parameters<typeof func>
) => {
  if (!isFunction(func)) {
    throw new Error('func must be a function');
  }
  return (...args: Parameters<typeof func>) => {
    return func(...rest, ...args);
  };
};

export default partial;
