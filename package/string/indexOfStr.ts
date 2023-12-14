import curry, { Curry } from '../fp/curry';

type IndexOfStr = (source: string, target: string) => number;

const indexOfStr: Curry<IndexOfStr> = curry((source, target) => {
  return source.indexOf(target);
});

export default indexOfStr;
