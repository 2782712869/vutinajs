import reduce from '../collect/reduce';
import isFunction from '../fn/isFunction';
import identity from './identity';

type PipeFunction<T> = (...args: T[]) => T;

const pipe = <T>(...args: PipeFunction<T>[]): PipeFunction<T> => {
  if (!isFunction(args[0])) {
    throw new Error('args must be a function');
  }
  return reduce(
    (g, f) => {
      return (...rest: T[]) => {
        return f(g(...rest));
      };
    },
    identity,
    args,
  );
};

export default pipe;
