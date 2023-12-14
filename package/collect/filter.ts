import curry, { Curry } from '../fp/curry';

type Filter = <T, U extends T[]>(
  predicate: (item: T, index: number) => boolean,
  list: U,
) => T[];

const filter: Curry<Filter> = curry((predicate, list) => {
  if (list.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i)) {
      result.push(list[i]);
    }
  }

  return result;
});

export default filter;
