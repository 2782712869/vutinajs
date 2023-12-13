const partial = <T, R>(func: (...args: T[]) => R, ...rest: T[]) => {
  return (...args: T[]) => {
    return func(...rest, ...args);
  };
};

export default partial;
