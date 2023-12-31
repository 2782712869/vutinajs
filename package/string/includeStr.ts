import isString from './isString';
import curry from '../fp/curry';

const includeStr = curry((source: string, target: string) => {
  if (!isString(source) || !isString(target)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return false;
  return source.includes(target);
});

export default curry(includeStr);
