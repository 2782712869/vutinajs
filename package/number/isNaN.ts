type IsNaN = <T>(value: T) => boolean;

const isNaN: IsNaN = (value) => {
  return typeof value === 'number' && Number.isNaN(value);
};

export default isNaN;
