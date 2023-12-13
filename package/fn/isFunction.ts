type IsFunction = <T>(value: T) => boolean;

const isFunction: IsFunction = (value) => {
  return typeof value === 'function';
};

export default isFunction;
