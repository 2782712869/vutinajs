import includes from '../array/includes';
import keys from './keys';

const isEqual = <T>(obj1: T, obj2: T): boolean => {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = keys(obj1) as (keyof T)[];
  const keys2 = keys(obj2) as (keyof T)[];

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!includes(keys2, key) || !isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

export default isEqual;
