import reduce from './reduce';
import isNull from '../object/isNull';
import isUndefined from '../object/isUndefined';
import isArray from '../array/isArray';
import { FullType } from '../utilis/types';

type CountBy = <T extends FullType[]>(
  iteratee: (item: T[number]) => string,
  list: T,
) => Counts;

type Counts = {
  [key: string]: number;
};

const countBy: CountBy = (iteratee, list) => {
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

export default countBy;
