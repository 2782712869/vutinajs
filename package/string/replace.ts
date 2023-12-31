import isString from './isString';
import curry from '../fp/curry';

const replace = curry(
  <T extends string, K extends string | RegExp>(
    source: T,
    target: [oldStr: K, newStr: T],
  ) => {
    if (!isString(source)) {
      throw new Error('source must be a string');
    }
    if (source.length === 0) return '';
    return source.replace(...target);
  },
);

export default replace;
