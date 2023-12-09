type IndexOfStr = (source: string, target: string) => number;

const indexOfStr: IndexOfStr = (source, target) => {
  return source.indexOf(target);
};

export default indexOfStr;
