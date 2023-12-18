import isFunction from './isFunction';

type Delay = <T>(
  fn: (...args: T[]) => void,
  time: number,
) => (...rest: T[]) => void;

const delay: Delay = (fn, time) => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function');
  }
  return (...args) => {
    setTimeout(() => fn(...args), time);
  };
};

export default delay;
