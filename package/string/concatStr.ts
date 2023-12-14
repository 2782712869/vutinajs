import curry, { Curry } from '../fp/curry';

type ConcatStr = (str: string, ...strs: string[]) => string;

const concatStr: Curry<ConcatStr> = curry((str, ...strs) => {
  return `${str}${strs.join('')}`;
});

export default concatStr;
