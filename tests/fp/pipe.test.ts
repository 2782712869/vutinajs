import pipe from '../../package/fp/pipe';

describe('pipe function', () => {
  it('should compose functions into a pipeline and execute them from left to right', () => {
    const addTwo = (x: number) => x + 2;
    const multiplyByThree = (x: number) => x * 3;
    const subtractFive = (x: number) => x - 5;

    const pipeline = pipe(addTwo, multiplyByThree, subtractFive);

    // Execute the pipeline with an initial value
    const result = pipeline(10);

    // Ensure the functions are composed correctly
    // (10 + 2) * 3 - 5 = 31
    expect(result).toBe(31);
  });

  // it('should throw an error if the first argument is not a function', () => {
  //   expect(() => pipe(42)).toThrowError('args must be a function');
  //   expect(() => pipe('string')).toThrowError('args must be a function');
  //   expect(() => pipe(null)).toThrowError('args must be a function');
  //   expect(() => pipe(undefined)).toThrowError('args must be a function');
  //   expect(() => pipe({ key: 'value' })).toThrowError('args must be a function');
  //   expect(() => pipe([1, 2, 3])).toThrowError('args must be a function');
  // });

  it('should handle the case of a single function', () => {
    const square = (x: number) => x * x;

    const pipeline = pipe(square);

    // Execute the pipeline with an initial value
    const result = pipeline(4);

    // Ensure the single function is executed
    expect(result).toBe(16);
  });
});
