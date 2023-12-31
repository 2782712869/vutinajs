import reduce from './reduce';
import isNull from '../object/isNull';
import isUndefined from '../object/isUndefined';
import isArray from '../array/isArray';
import { FullType } from '../utilis/types';
import curry from '../fp/curry';

type Counts = Record<string | symbol, number>;

const countBy = <T extends FullType[]>(
  iteratee: (item: T[number]) => string | symbol,
  list: T,
) => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (list.length === 0) {
    return {};
  }
  return reduce(
    (result: Counts, value: (typeof list)[number]) => {
      const key = iteratee(value);
      if (!isNull(key) && !isUndefined(key)) {
        result[key] = (result[key] || 0) + 1;
      }
      return result;
    },
    Object.create(null),
    list,
  );
};

export default curry(countBy);
