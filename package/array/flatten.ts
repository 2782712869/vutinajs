import isArray from './isArray';
import { FullType } from 'utilis/types';

const flatten = <T extends FullType[]>(list: T) => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (list.length === 0) {
    return [];
  }
  const result: FullType[] = [];
  for (let i = 0; i < list.length; i++) {
    if (isArray(list[i])) {
      result.push(...flatten(list[i] as T));
    } else {
      result.push(list[i]);
    }
  }
  return result;
};

export default flatten;
