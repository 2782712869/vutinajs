type ConcatStr = (str: string, ...strs: string[]) => string;

const concatStr: ConcatStr = (str, ...strs) => {
  return str.concat(...strs);
};

export default concatStr;
