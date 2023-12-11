import concat from './concat';

type Union = <T>(arr: T[], ...args: T[][]) => T[];

const union: Union = (arr, ...arrs) => {
  const onlyArr = new Set(concat(arr, ...arrs));

  return [...onlyArr];
};

export default union;
