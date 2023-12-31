import isString from './isString';
import curry from '../fp/curry';

type IndexOfStr = (source: string, target: string) => number;

const indexOfStr: IndexOfStr = (source, target) => {
  if (!isString(source) || !isString(target)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return -1;
  return source.indexOf(target);
};

export default curry(indexOfStr);
