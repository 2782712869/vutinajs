import isObject from './isObject';
import curry from '../fp/curry';

const has = curry(<T extends object>(obj: T, propertyName: string) => {
  if (!isObject(obj)) {
    throw new Error('obj must be an object');
  }
  return Object.hasOwn(obj, propertyName);
});

export default has;
