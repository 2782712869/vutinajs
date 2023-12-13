const map = <T, U>(mapper: (item: T, index: number) => U, arr: T[]): U[] => {
  const result: U[] = [];
  for (const [index, item] of arr.entries()) {
    result.push(mapper(item, index));
  }
  return result;
};

export default map;
