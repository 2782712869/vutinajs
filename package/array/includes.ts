import isArray from './isArray';
import { FullType } from '../utilis/types';

const includes = <T extends FullType[]>(arr: T, key: T[number]) => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arr.length === 0) return arr;
  for (const value of arr) {
    if (value === key) return true;
  }
  return false;
};

export default includes;
