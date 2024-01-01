import isArray from './isArray';
import { FullType } from '../utilis/types';

const take = <T extends FullType>(arr: T[], count: number) => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arr.length === 0) return [];
  return arr.slice(0, count);
};

export default take;
