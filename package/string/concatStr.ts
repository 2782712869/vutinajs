type ConcatStr = (str: string, ...strs: string[]) => string;

const concatStr: ConcatStr = (str, ...strs) => {
  return `${str}${strs.join('')}`;
};

export default concatStr;
