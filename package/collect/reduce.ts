import isArray from '../array/isArray';
import { FullType } from '../utilis/types';

type Reducer<A, R> = (
  accumulator: R,
  currentValue: A,
  currentIndex: number,
) => R;

const reduce = <A extends FullType, R>(
  reducer: Reducer<A, R>,
  initialValue: R,
  array: A[],
): R => {
  if (!isArray(array)) {
    throw new Error('array must be an array');
  }
  if (array.length === 0) {
    return array as R;
  }
  let accumulator: R = initialValue;

  for (const [index, value] of array.entries()) {
    accumulator = reducer(accumulator, value, index);
  }

  return accumulator;
};

export default reduce;
