import isString from './isString';
import curry from '../fp/curry';

const sliceStr = curry(
  (source: string, start: number, end: number = source.length) => {
    if (!isString(source)) {
      throw new Error('source must be a string');
    }
    if (source.length === 0) return '';
    return source.slice(start, end);
  },
);

export default sliceStr;
