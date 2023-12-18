import each from '../collect/each';
import isArray from './isArray';

type Concat = <T>(arr: T[], ...arrs: T[][]) => T[];

const concat: Concat = (arr, ...arrs) => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arrs.length === 0) return arr;
  const result = [...arr];
  each((item) => {
    result.push(...item);
  }, arrs);
  return result;
};

export default concat;
