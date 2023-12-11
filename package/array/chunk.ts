const chunk = <
  T extends
    | string
    | number
    | {
        [key: string]: string | number;
      },
>(
  list: T[],
  size: number,
): T[][] => {
  if (size <= 0) throw new Error('size不能小于等于0');
  const result: T[][] = [];
  for (let i = 0; i < list.length; i += size) {
    result.push(list.slice(i, i + size));
  }
  return result;
};

export default chunk;
