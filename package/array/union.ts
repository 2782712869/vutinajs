import concat from './concat';
import isArray from './isArray';

type Union = <T>(arr: T[], ...args: T[][]) => T[];

const union: Union = (arr, ...arrs) => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arrs.length === 0) return arr;
  const onlyArr = new Set(concat(arr, ...arrs));

  return [...onlyArr];
};

export default union;
