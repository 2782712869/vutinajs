import curry, { Curry } from '../fp/curry';

type Each = <T>(iteratee: (value: T, index: number) => void, list: T[]) => void;

const each: Curry<Each> = curry((iteratee, list) => {
  if (list.length === 0) {
    return;
  }
  for (const [index, key] of list.entries()) {
    iteratee(key, index);
  }
});

export default each;
