type Sort = (
  compareFn: (a: number, b: number) => number,
  list: number[],
) => number[];

const sort: Sort = (compareFn, list) => {
  const copy = list.slice(0);
  return copy.sort(compareFn);
};

export default sort;
