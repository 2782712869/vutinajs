import { FullType } from 'utilis/types';
import has from './has';
import isObject from './isObject';
import curry from '../fp/curry';

type AnyObject = Record<string, FullType>;

const assign = curry(
  <T extends AnyObject, U extends AnyObject[]>(
    target: T,
    ...sources: U
  ): T & U[number] => {
    if (!isObject(target)) {
      throw new TypeError('Expected an object');
    }
    sources.forEach((source) => {
      for (const key in source) {
        if (has(source, key)) {
          target[key as keyof T] = source[key] as T[keyof T];
        }
      }
    });

    return target as T & U[number];
  },
);

export default assign;
