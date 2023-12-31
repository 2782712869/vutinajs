import each from '../collect/each';
import isArray from './isArray';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const concat = <T>(arr: T[], ...arrs: T[][]): T[] => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arrs.length === 0) return arr;
  const result = [...arr];
  each((item) => {
    result.push(...(item as T[]));
  }, arrs);
  return result;
};

export default concat;
