import isArray from './isArray';
import { FullType } from '../utilis/types';

const chunk = <T extends FullType>(list: T[], size: number): T[][] => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (!Number.isInteger(size) || size <= 0)
    throw new Error('size必须是大于0的整数');
  if (chunk.length === 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < list.length; i += size) {
    result.push(list.slice(i, i + size));
  }
  return result;
};

export default chunk;
