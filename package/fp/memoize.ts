const memoize = <T, R>(id: number, fn: (...args: T[]) => R) => {
  const cache: {
    [key: string]: unknown;
  } = {};
  return (...rest: T[]) => {
    if (!cache[id]) {
      cache[id] = fn(...rest);
    }
    return cache[id];
  };
};

export default memoize;
