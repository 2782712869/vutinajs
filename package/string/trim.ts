import isString from './isString';

type Trim = (value: string) => string;

const trim: Trim = (value) => {
  if (!isString(value)) {
    throw new Error('value must be a string');
  }
  if (value.length === 0) return '';
  return value.trim();
};

export default trim;
