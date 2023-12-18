import each from '../collect/each';
import includes from '../array/includes';
import keys from './keys';
import isObject from './isObject';
import { FullType } from 'utilis/types';

type _Omit = <T extends Obj>(obj: T, props: string[]) => Obj;

type Obj = {
  [key: string]: FullType;
};

const omit: _Omit = (obj, props) => {
  if (!isObject(obj)) {
    throw new TypeError('Expected an object');
  }
  const result: Obj = {};

  each((key: string) => {
    if (!includes(props, key)) {
      result[key] = obj[key];
    }
  }, keys(obj));

  return result;
};

export default omit;
