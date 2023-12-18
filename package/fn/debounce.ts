import isFunction from './isFunction';

const debounce = <T, R>(fn: (...args: T[]) => R, delay: number) => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function');
  }
  let timer: NodeJS.Timeout | number;
  return (...rest: T[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...rest);
    }, delay);
  };
};

export default debounce;
