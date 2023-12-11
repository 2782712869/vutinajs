const isObject = <T>(value: T) =>
  Object.prototype.toString.call(value) === '[object Object]';

export default isObject;
