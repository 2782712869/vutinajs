import curry from '../../package/fp/curry';

describe('curry function', () => {
  it('should curry a function with multiple parameters', () => {
    const add = (a: number, b: number, c: number) => a + b + c;

    const curriedAdd = curry(add);

    // Partial application of parameters
    const addPartial = curriedAdd(2);
    const addResult = addPartial(3)(4);

    // Ensure the curried function returns the correct result
    expect(addResult).toBe(9);
  });

  it('should handle functions with varying numbers of parameters', () => {
    const concat = (args1: string, args2: string) => args1 + args2;

    const curriedConcat = curry(concat);

    // Currying with variable number of parameters
    const concatResult = curriedConcat('Hello')(' World!');

    // Ensure the curried function returns the correct result
    expect(concatResult).toBe('Hello World!');
  });

  // it('should throw an error if the input is not a function', () => {
  //   expect(() => curry(42)).toThrowError('fn must be a function');
  //   expect(() => curry('string')).toThrowError('fn must be a function');
  //   expect(() => curry(null)).toThrowError('fn must be a function');
  //   expect(() => curry(undefined)).toThrowError('fn must be a function');
  //   expect(() => curry({ key: 'value' })).toThrowError('fn must be a function');
  //   expect(() => curry([1, 2, 3])).toThrowError('fn must be a function');
  // });
});
