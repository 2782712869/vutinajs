import isArray from '../array/isArray';
import { FullType } from '../utilis/types';
import curry from '../fp/curry';

const each = <T extends FullType>(
  iteratee: (value: (typeof list)[number], index: number) => void,
  list: T[],
) => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (list.length === 0) {
    return list;
  }
  for (const [index, key] of list.entries()) {
    iteratee(key, index);
  }
};

export default curry(each);
