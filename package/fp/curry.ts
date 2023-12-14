/* eslint-disable @typescript-eslint/no-explicit-any */
type Curried<A, R> = A extends []
  ? () => R
  : A extends [infer ARG]
    ? (param: ARG) => R
    : A extends [infer ARG, ...infer REST]
      ? (param: ARG) => Curried<REST, R>
      : never;

const curry = <A extends any[], R>(fn: (...args: A[]) => R): Curried<A, R> => {
  const curried = (...args: A[]) => {
    return args.length < fn.length
      ? (...rest: A[]) => curried(...args, ...rest)
      : fn(...args);
  };
  return curried as Curried<A, R>;
};

export default curry;
