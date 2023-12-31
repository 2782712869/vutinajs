import each from '../collect/each';
import isObject from './isObject';
import { FullType } from 'utilis/types';
import curry from '../fp/curry';

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
  each((key) => {
    result[key as string] = obj[key as string];
  }, props);
  return result;
};

export default curry(pick);
