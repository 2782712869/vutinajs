import isFunction from '../fn/isFunction';
import isArray from '../array/isArray';
import { FullType } from 'utilis/types';

const some = <
  T extends (value: U[number], index: number) => boolean,
  U extends FullType[],
>(
  iteratee: T,
  list: U,
) => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (!isFunction(iteratee)) {
    throw new Error('iteratee must be a function');
  }
  if (list.length === 0) {
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    if (iteratee(list[i], i)) {
      return true;
    }
  }
  return false;
};

export default some;
