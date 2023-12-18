/* eslint-disable @typescript-eslint/no-explicit-any */
export type Curry<
  F extends (...args: any[]) => any,
  A extends any[] = [],
> = A['length'] extends Parameters<F>['length']
  ? () => ReturnType<F>
  : A extends [...infer P, ...infer R]
    ? P['length'] extends Parameters<F>['length']
      ? Curry<F, R>
      : (...args: P) => Curry<F, R>
    : never;

const curry = <F extends (...args: any[]) => any>(fn: F): Curry<F> => {
  const curried = (...args: any) =>
    args.length >= fn.length
      ? fn(...args)
      : (...rest: any) => curried(...args, ...rest);

  return curried as Curry<F>;
};

export default curry;
