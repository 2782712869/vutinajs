import curry from '../fp/curry';

type Reducer<A, R> = (
  accumulator: R,
  currentValue: A,
  currentIndex: number,
) => R;

const reduce = curry(
  <A, R>(reducer: Reducer<A, R>, initialValue: R, array: A[]): R => {
    let accumulator: R = initialValue;

    for (const [index, value] of array.entries()) {
      accumulator = reducer(accumulator, value, index);
    }

    return accumulator;
  },
);

export default reduce;
