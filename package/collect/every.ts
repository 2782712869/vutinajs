import isArray from '../array/isArray';
import curry from '../fp/curry';

const every = curry(
  <T>(predicate: (value: T, index: number) => boolean, list: T[]) => {
    if (!isArray(list)) {
      throw new Error('list must be an array');
    }
    if (list.length === 0) {
      return true;
    }
    for (let i = 0; i < list.length; i++) {
      if (!predicate(list[i], i)) {
        return false;
      }
    }
    return true;
  },
);

export default every;
