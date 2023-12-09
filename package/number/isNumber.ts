type IsNumber = <T>(value: T) => boolean;

const isNumber: IsNumber = (value) => {
  return typeof value === 'number';
};

export default isNumber;
