import each from '../collect/each';
import includes from '../array/includes';
import keys from './keys';
import isObject from './isObject';
import { FullType } from 'utilis/types';

type Obj = {
  [key: string]: FullType;
};

const omit = <T extends Obj>(obj: T, props: string[]) => {
  if (!isObject(obj)) {
    throw new TypeError('Expected an object');
  }
  const result: Obj = {};

  each((key) => {
    if (!includes(props, key)) {
      result[key as string] = obj[key as string];
    }
  }, keys(obj));

  return result;
};

export default omit;
