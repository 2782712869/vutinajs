import isFunction from '../fn/isFunction';
import reduceRight from '../collect/reduceRight';
import identity from './identity';

type ComposeFunction<T> = (...args: T[]) => T;

const compose = <T>(...args: ComposeFunction<T>[]): ComposeFunction<T> => {
  if (!isFunction(args[0])) {
    throw new Error('args must be a function');
  }
  return reduceRight(
    (g, f) => {
      return (...rest: T[]) => {
        return f(g(...rest));
      };
    },
    identity,
    args,
  );
};

export default compose;
