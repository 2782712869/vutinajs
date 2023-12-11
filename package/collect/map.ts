type Map = <
  T extends
    | string[]
    | number[]
    | {
        [key: string]: string | number;
      }[],
>(
  predicate: (item: T[number], index: number) => T[number],
  list: T,
) => T[number][];

const map: Map = (predicate, list) => {
  return list.map((item, index) => predicate(item, index));
};

export default map;
