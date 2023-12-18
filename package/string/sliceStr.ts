import isString from './isString';

type SliceStr = (source: string, start: number, end?: number) => string;

const sliceStr: SliceStr = (source, start, end = source.length) => {
  if (!isString(source)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return '';
  return source.slice(start, end);
};

export default sliceStr;
