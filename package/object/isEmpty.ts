import isNull from './isNull';
import isUndefined from './isUndefined';

const isEmpty = <T extends object>(value: T): boolean => {
  if (isNull(value) || isUndefined(value)) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (
    Object.prototype.toString.call(value) === '[object Object]' &&
    Object.keys(value).length === 0
  ) {
    return true;
  }
  return !value;
};

export default isEmpty;
