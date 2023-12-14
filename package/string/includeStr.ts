import curry, { Curry } from '../fp/curry';

type IncludeStr = (source: string, target: string) => boolean;

const includeStr: Curry<IncludeStr> = curry((source, target) => {
  return source.includes(target);
});

export default includeStr;
