import isString from './isString';
import curry from '../fp/curry';

const split = curry((source: string, separator: string, limit?: number) => {
  if (!isString(source)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return [''];
  return source.split(separator, limit);
});

export default split;
