import reduce from './reduce';
import isNull from '../object/isNull';
import isUndefined from '../object/isUndefined';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CountBy = <T extends any[]>(
  iteratee: (item: T[number]) => string,
  list: T,
) => Counts;

type Counts = {
  [key: string]: number;
};

const countBy: CountBy = (iteratee, list) => {
  if (list.length === 0) {
    return {};
  }
  return reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (result: Counts, value) => {
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

console.log(
  countBy(
    (num) => {
      return num % 2 == 0 ? 'even' : 'odd';
    },
    [1, 2, 3, 4, 5],
  ),
);
export default countBy;
