import isArray from './isArray';

const join = <T>(arr: T[], separator: string) => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arr.length === 0) return '';
  return arr.join(separator);
};

export default join;
