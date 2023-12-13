type ComposeFunction<T> = (...args: T[]) => T;

const compose = <T>(...args: ComposeFunction<T>[]): ComposeFunction<T> => {
  return args.reduceRight((g, f) => {
    return (...rest: T[]) => {
      return f(g(...rest));
    };
  });
};

export default compose;
