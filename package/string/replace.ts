import isString from './isString';

type Replace = <T extends string, K extends string | RegExp>(
  source: T,
  target: [oldStr: K, newStr: T],
) => string;

const replace: Replace = (source, target) => {
  if (!isString(source)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return '';
  return source.replace(...target);
};

export default replace;
