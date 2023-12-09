type IncludeStr = (source: string, target: string) => boolean;

const includeStr: IncludeStr = (source, target) => {
  return source.includes(target);
};

export default includeStr;
