import curry, { Curry } from '../fp/curry';

type Replace = <T extends string, K extends string | RegExp>(
  source: T,
  target: [oldStr: K, newStr: T],
) => string;

const replace: Curry<Replace> = curry((source, target) => {
  return source.replace(...target);
});

export default replace;
