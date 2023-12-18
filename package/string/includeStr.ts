import isString from './isString';

type IncludeStr = (source: string, target: string) => boolean;

const includeStr: IncludeStr = (source, target) => {
  if (!isString(source) || !isString(target)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return false;
  return source.includes(target);
};

export default includeStr;
