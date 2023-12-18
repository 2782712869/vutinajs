import map from './map';
import isArray from '../array/isArray';
import { FullType } from 'utilis/types';

type Pluck = <T extends Record<string, FullType>>(
  list: T[],
  propertyName: keyof T,
) => T[keyof T][];

const pluck: Pluck = (list, propertyName) => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (list.length === 0) {
    return [];
  }
  return map((item: (typeof list)[number]) => item[propertyName], list);
};

export default pluck;
