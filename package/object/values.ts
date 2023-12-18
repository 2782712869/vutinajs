import isObject from './isObject';

const values = <T extends object>(obj: T) => {
  if (!isObject(obj)) {
    throw new TypeError('Expected an object');
  }
  return Object.values(obj);
};

export default values;
