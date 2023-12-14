import curry, { Curry } from '../fp/curry';

type Split = (source: string, separator: string, limit?: number) => string[];

const split: Curry<Split> = curry((source, separator, limit) => {
  return source.split(separator, limit);
});

export default split;
