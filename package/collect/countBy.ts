import reduce from './reduce';

type CountBy = <T extends string[] | number[]>(
  iteratee: (item: (typeof list)[number]) => string,
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
    (result: Counts, value) => {
      const key = iteratee(value);
      result[key] = (result[key] || 0) + 1;
      return result;
    },
    Object.create(null),
    list,
  );
};

export default countBy;
