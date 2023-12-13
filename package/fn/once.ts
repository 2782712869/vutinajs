type Func<T extends FullTypeArray, R> = (...args: T) => R;

type FullType = string | number | boolean | symbol | bigint | object;
type FullTypeArray = FullType[];

const once = <T extends FullTypeArray, R>(
  fn: Func<T, R>,
): Func<T, R | undefined> => {
  let called = false;
  let result: R | undefined;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
};

export default once;
