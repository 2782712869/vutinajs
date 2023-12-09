type Each = <T extends string[] | number[]>(
  iteratee: (value: (typeof list)[number], index: number) => void,
  list: T,
) => void;

const each: Each = (iteratee, list) => {
  list.forEach((value, index) => {
    iteratee(value, index);
  });
};

export default each;
