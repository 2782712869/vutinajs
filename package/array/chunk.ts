import isArray from './isArray';
import { FullType } from '../utilis/types';
import curry from '../fp/curry';

const chunk = curry(<T extends FullType>(list: T[], size: number): T[][] => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (!Number.isInteger(size) || size <= 0)
    throw new Error('size must be a positive integer');
  if (chunk.length === 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < list.length; i += size) {
    result.push(list.slice(i, i + size));
  }
  return result;
});

export default chunk;
