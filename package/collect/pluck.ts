/* eslint-disable @typescript-eslint/no-explicit-any */
import curry, { Curry } from '../fp/curry';
import map from './map';

type Pluck = <T extends Record<string, any>>(
  list: T[],
  propertyName: keyof T,
) => T[keyof T][] | undefined;

const pluck: Curry<Pluck> = curry((list, propertyName) => {
  if (list.length === 0) {
    return;
  }
  return map((item: (typeof list)[number]) => item[propertyName], list);
});

export default pluck;
