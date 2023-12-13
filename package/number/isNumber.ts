type IsNumber = (value: unknown) => boolean;

const isNumber: IsNumber = (value) => {
  return typeof value === 'number';
};

export default isNumber;
