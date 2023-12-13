type CurryFunction<T, R> = ((...args: T[]) => R) & {
  (...args: T[]): T[]['length'] extends 0 ? R : CurryFunction<T, R>;
};

const curry = <T, R>(fn: (...args: T[]) => R): CurryFunction<T, R> => {
  const curried = (...args: T[]) => {
    return args.length < fn.length
      ? (...rest: T[]) => curried(...args, ...rest)
      : fn(...args);
  };
  return curried as CurryFunction<T, R>;
};

export default curry;
