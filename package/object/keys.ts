import isObject from './isObject';

const keys = <T extends object>(obj: T): string[] => {
  if (!isObject(obj)) {
    throw new TypeError('Expected an object');
  }
  return Object.keys(obj);
};

export default keys;
