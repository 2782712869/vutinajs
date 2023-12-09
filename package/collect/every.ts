type Every = <T extends string[] | number[]>(
  predicate: (value: T[number], index: number) => boolean,
  list: T,
) => boolean;

const every: Every = (predicate, list) => {
  return list.every(predicate);
};

export default every;
