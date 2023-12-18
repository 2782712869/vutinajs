import isArray from '../array/isArray';

type Each = <T>(iteratee: (value: T, index: number) => void, list: T[]) => void;

const each: Each = (iteratee, list) => {
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

export default each;
