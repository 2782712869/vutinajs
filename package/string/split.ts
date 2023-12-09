type Split = (source: string, separator: string, limit?: number) => string[];

const split: Split = (source, separator, limit) => {
  return source.split(separator, limit);
};

export default split;
