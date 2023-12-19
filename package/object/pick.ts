import each from '../collect/each';
import isObject from './isObject';
import { FullType } from 'utilis/types';

type _Pick = <T extends Obj, K extends keyof T>(
  obj: T,
  props: K[] & string[],
) => Obj;

type Obj = Record<string | symbol, FullType>;

const pick: _Pick = (obj, props) => {
  if (!isObject(obj)) {
    throw new TypeError('Expected an object');
  }
  const result: Obj = {};
  each((key: string) => {
    result[key] = obj[key];
  }, props);
  return result;
};

export default pick;
