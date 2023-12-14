import curry, { Curry } from '../fp/curry';

type SliceStr = (source: string, start: number, end?: number) => string;

const sliceStr: Curry<SliceStr> = curry(
  (source, start, end = source.length) => {
    return source.slice(start, end);
  },
);

export default sliceStr;
