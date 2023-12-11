import each from './each';

type Pluck = (
  list: {
    [key: string]: string | number;
  }[],
  propertyName: string,
) => (string | number)[];

const pluck: Pluck = (list, propertyName) => {
  const arr: (string | number)[] = [];
  each((item) => {
    return item[propertyName];
  }, list);

  return arr;
};

export default pluck;
