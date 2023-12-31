import { FullType } from 'utilis/types';
import isObject from './isObject';
import each from '../collect/each';
import some from '../collect/some';
import curry from '../fp/curry';

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
    for (const key in obj as object) {
      if (
        isObject(obj![key as keyof object]) &&
        key in result &&
        isObject(result[key])
      ) {
        result[key] = merge(
          result[key] as AnyObject,
          obj![key as keyof object] as AnyObject,
        );
      } else {
        result[key] = obj![key as keyof object];
      }
    }
  }, objects);

  return result as T & U[number];
};

export default curry(merge);
