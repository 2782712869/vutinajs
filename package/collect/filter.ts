type Filter = <T extends string[] | number[]>(
  predicate: (value: T[number], index: number) => boolean,
  list: T,
) => T;

const filter: Filter = (predicate, list) => {
  return list.filter(predicate);
};

export default filter;
