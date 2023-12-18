import isFunction from './isFunction';

const throttle = <T, R>(fn: (...args: T[]) => R, delay: number) => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function');
  }
  let lastExecTime = 0;
  return (...rest: T[]) => {
    const now = Date.now();
    if (now - lastExecTime >= delay) {
      fn(...rest);
      lastExecTime = now;
    }
  };
};

export default throttle;
