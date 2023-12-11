type Filter = <T extends string[] | number[]>(
  predicate: (item: T[number], index: number) => boolean,
  list: T,
) => T[number][];

const filter: Filter = (predicate, list) => {
  return list.filter((item, index) => predicate(item, index));
};

export default filter;
