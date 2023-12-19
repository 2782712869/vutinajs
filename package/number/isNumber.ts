import isNaN from './isNaN';
type IsNumber = (value: unknown) => boolean;

const isNumber: IsNumber = (value) => {
  return typeof value === 'number' && !isNaN(value);
};

export default isNumber;
