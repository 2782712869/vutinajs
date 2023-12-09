type IsString = <T>(value: T) => boolean;

const isString: IsString = (value) => {
  return typeof value === 'string';
};

export default isString;
