type IsNaN = <T>(value: T) => boolean;

const isNaN: IsNaN = (value) => {
  return Number.isNaN(value);
};

export default isNaN;
