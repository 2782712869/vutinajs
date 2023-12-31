import isFunction from './isFunction';
import { FullType } from 'utilis/types';
import curry from '../fp/curry';

const throttle = <T extends FullType, R>(
  fn: (...args: T[]) => R,
  delay: number,
) => {
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

export default curry(throttle);
