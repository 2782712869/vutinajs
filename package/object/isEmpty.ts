import isArray from '../array/isArray';
import isNull from './isNull';
import isObject from './isObject';
import isUndefined from './isUndefined';
import keys from './keys';

const isEmpty = <T>(value: T): boolean => {
  if (isNull(value) || isUndefined(value)) {
    return true;
  }
  if (isArray(value) && (value as []).length === 0) {
    return true;
  }
  if (isObject(value) && keys(value as object).length === 0) {
    return true;
  }
  return !value;
};

export default isEmpty;
