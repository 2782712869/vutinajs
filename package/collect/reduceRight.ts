import isArray from '../array/isArray';

type ReduceRightCallback<T, U> = (
  accumulator: U,
  currentValue: T,
  currentIndex: number,
  array: T[],
) => U;

function reduceRight<T, U>(
  array: T[],
  callbackfn: ReduceRightCallback<T, U>,
  initialValue: U,
): U {
  if (!isArray(array)) {
    throw new Error('array must be an array');
  }
  if (array.length === 0) {
    return array as R;
  }
  let accumulator = initialValue;
  for (let i = array.length - 1; i >= 0; i--) {
    accumulator = callbackfn(accumulator, array[i], i, array);
  }
  return accumulator;
}

export default reduceRight;
