type Reducer<T, U> = (
  accumulator: U,
  currentValue: T,
  currentIndex: number,
) => U;

function reduce<T, U>(reducer: Reducer<T, U>, initialValue: U, array: T[]): U {
  let accumulator: U = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i], i);
  }

  return accumulator;
}

export default reduce;
