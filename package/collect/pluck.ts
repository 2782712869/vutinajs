import map from './map';
import isArray from '../array/isArray';
import { FullType } from 'utilis/types';

const pluck = <T extends Record<string, FullType>>(
  list: T[],
  propertyName: keyof T,
): T[keyof T][] => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (list.length === 0) {
    return [];
  }
  return map((item) => (item as T)[propertyName], list) as T[keyof T][];
};

export default pluck;
