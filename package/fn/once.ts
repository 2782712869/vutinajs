import { FullType } from 'utilis/types';
import isFunction from './isFunction';

type Func<T extends FullTypeArray, R> = (...args: T) => R;
type FullTypeArray = FullType[];

const once = <T extends FullTypeArray, R>(
  fn: Func<T, R>,
): Func<T, R | undefined> => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function');
  }
  let called = false;
  let result: R | undefined;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
};

export default once;
