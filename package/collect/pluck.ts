import map from './map';

type Pluck = <T extends Record<string, unknown>>(
  list: T[],
  propertyName: keyof T,
) => T[keyof T][] | undefined;

const pluck: Pluck = (list, propertyName) => {
  if (list.length === 0) {
    return;
  }
  return map((item) => item[propertyName], list);
};

export default pluck;
