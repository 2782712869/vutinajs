type IsString = (value: unknown) => boolean;

const isString: IsString = (value) => {
  return typeof value === 'string';
};

export default isString;
