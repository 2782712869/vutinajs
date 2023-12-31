import { FullType } from 'utilis/types';
import isObject from './isObject';
import each from '../collect/each';
import some from '../collect/some';

type AnyObject = Record<string, FullType>;

const merge = <T extends AnyObject, U extends AnyObject[]>(
  ...objects: [T, ...U]
): T & U[number] => {
  if (some((obj) => !isObject(obj), objects)) {
    throw new TypeError('Expected all arguments to be objects');
  }
  if (objects.length === 1) {
    return objects[0];
  }

  const result: AnyObject = {};

  each((obj) => {
    for (const key in obj) {
      if (isObject(obj[key]) && key in result && isObject(result[key])) {
        result[key] = merge(result[key] as AnyObject, obj[key] as AnyObject);
      } else {
        result[key] = obj[key];
      }
    }
  }, objects);

  return result as T & U[number];
};

export default merge;
