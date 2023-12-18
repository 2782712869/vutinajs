import isObject from './isObject';

const has = <T extends object>(obj: T, propertyName: string) => {
  if (!isObject(obj)) {
    throw new Error('obj must be an object');
  }
  return Object.hasOwn(obj, propertyName);
};

export default has;
