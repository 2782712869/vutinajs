type Concat = <T>(arr: T[], ...arrs: T[][]) => T[];

const concat: Concat = (arr, ...arrs) => {
  return arr.concat(...arrs);
};

export default concat;
