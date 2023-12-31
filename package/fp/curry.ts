import isFunction from '../fn/isFunction';

type Curry<A, R, D extends unknown[] = []> = A extends [infer H, ...infer T]
  ? T extends []
    ? (...args: [...D, H]) => R
    : ((...args: [...D, H]) => Curry<T, R>) & Curry<T, R, [...D, H]>
  : () => R;

const curry = <A extends unknown[], R>(fn: (...args: A) => R): Curry<A, R> => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function');
  }
  const curried = (...args: unknown[]) => {
    return args.length >= fn.length
      ? fn(...(args as A))
      : (...rest: unknown[]) => curried(...args, ...rest);
  };
  return curried as Curry<A, R>;
};

export default curry;
