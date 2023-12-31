import compose from '../../package/fp/compose';

describe('compose function', () => {
  it('should compose functions into a pipeline and execute them from right to left', () => {
    const addTwo = (x: number) => x + 2;
    const multiplyByThree = (x: number) => x * 3;
    const subtractFive = (x: number) => x - 5;

    const composition = compose(addTwo, multiplyByThree, subtractFive);

    // Execute the composed functions with an initial value
    const result = composition(10);

    // Ensure the functions are composed correctly
    // (10 - 5) * 3 + 2 = 17
    expect(result).toBe(17);
  });

  // it('should throw an error if the first argument is not a function', () => {
  //   expect(() => compose(42)).toThrowError('args must be a function');
  //   expect(() => compose('string')).toThrowError('args must be a function');
  //   expect(() => compose(null)).toThrowError('args must be a function');
  //   expect(() => compose(undefined)).toThrowError('args must be a function');
  //   expect(() => compose({ key: 'value' })).toThrowError('args must be a function');
  //   expect(() => compose([1, 2, 3])).toThrowError('args must be a function');
  // });

  it('should handle the case of a single function', () => {
    const square = (x: number) => x * x;

    const composition = compose(square);

    // Execute the composed functions with an initial value
    const result = composition(4);

    // Ensure the single function is executed
    expect(result).toBe(16);
  });
});
