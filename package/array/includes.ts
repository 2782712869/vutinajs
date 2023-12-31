import isArray from './isArray';
import { FullType } from '../utilis/types';
import curry from '../fp/curry';

const includes = <T extends FullType[]>(arr: T, key: FullType) => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arr.length === 0) return false;
  for (const value of arr) {
    if (value === key) return true;
  }
  return false;
};

export default curry(includes);
