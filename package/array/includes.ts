type Includes = <T extends (string | number)[]>(
  arr: T,
  key: T[number],
) => boolean;

const includes: Includes = (arr, key) => arr.includes(key);

export default includes;
