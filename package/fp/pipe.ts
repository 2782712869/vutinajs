type PipeFunction<T> = (...args: T[]) => T;

const pipe = <T>(...args: PipeFunction<T>[]): PipeFunction<T> => {
  return args.reduce((g, f) => {
    return (...rest: T[]) => {
      return f(g(...rest));
    };
  });
};

export default pipe;
