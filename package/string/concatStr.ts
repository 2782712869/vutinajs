import isString from './isString';

type ConcatStr = (str: string, ...strs: string[]) => string;

const concatStr: ConcatStr = (str, ...strs) => {
  if (!isString(str)) {
    throw new Error('str must be a string');
  }
  return `${str}${strs.join('')}`;
};

export default concatStr;
