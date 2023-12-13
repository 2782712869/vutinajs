const map = <T, U>(mapper: (item: T, index: number) => U, arr: T[]): U[] => {
  if (arr.length === 0) {
    return [];
  }

  const result: U[] = new Array<U>(arr.length);

  for (let i = 0; i < arr.length; i++) {
    result[i] = mapper(arr[i], i);
  }

  return result;
};

export default map;
