import isString from './isString';
import curry from '../fp/curry';

type Split = (
  source: string,
  separator: string,
  limit?: number,
) => string[] | '';

const split: Split = (source, separator, limit) => {
  if (!isString(source)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return [''];
  return source.split(separator, limit);
};

export default curry(split);
