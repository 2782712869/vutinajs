type CountBy = <T extends string[] | number[]>(
  iteratee: (item: (typeof list)[number]) => string,
  list: T,
) => Counts;

type Counts = {
  [key: string]: number;
};

const countBy: CountBy = (iteratee, list) => {
  return list.reduce((resut: Counts, value) => {
    const key = iteratee(value);
    if (!resut[key]) {
      resut[key] = 1;
    } else {
      ++resut[key];
    }
    return resut;
  }, {});
};

export default countBy;
