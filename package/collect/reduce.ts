type Reducer<A, R> = (
  accumulator: R,
  currentValue: A,
  currentIndex: number,
) => R;

function reduce<A, R>(reducer: Reducer<A, R>, initialValue: R, array: A[]): R {
  let accumulator: R = initialValue;

  for (const [index, value] of array.entries()) {
    accumulator = reducer(accumulator, value, index);
  }

  return accumulator;
}

export default reduce;
