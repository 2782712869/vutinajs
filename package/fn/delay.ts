import isFunction from './isFunction';
import { FullType } from 'utilis/types';
const delay = <T extends FullType>(
  fn: (...args: T[]) => void,
  time: number,
): ((...rest: T[]) => void) => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function');
  }
  return (...args) => {
    setTimeout(() => fn(...args), time);
  };
};

export default delay;
