import reduce from './reduce';
import isNull from '../object/isNull';
import isUndefined from '../object/isUndefined';
import curry, { Curry } from '../fp/curry';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CountBy = <T extends any[]>(
  iteratee: (item: T[number]) => string,
  list: T,
) => Counts;

type Counts = {
  [key: string]: number;
};

const countBy: Curry<CountBy> = curry((iteratee, list) => {
  if (list.length === 0) {
    return {};
  }
  return reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (result: Counts, value: any) => {
      const key = iteratee(value);
      if (!isNull(key) && !isUndefined(key)) {
        result[key] = (result[key] || 0) + 1;
      }
      return result;
    },
    Object.create(null),
    list,
  );
});

export default countBy;
