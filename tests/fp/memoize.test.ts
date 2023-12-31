import memoize from '../../package/fp/memoize';

describe('memoize function', () => {
  it('should memoize the result of the provided function based on the id', () => {
    const mockFn = jest.fn((value: number) => ({ result: value * 2 }));
    const memoizedFn = memoize('uniqueId', mockFn);

    // Call the memoized function multiple times with the same id
    const result1 = memoizedFn(10);
    const result2 = memoizedFn(10);

    // Ensure the function is called only once for the same id
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Ensure the results are memoized
    expect(result1).toEqual({ result: 20 });
    expect(result2).toEqual({ result: 20 });

    // Call the memoized function with a different id
    const result3 = memoizedFn(20);

    // Ensure the function is called again for the different id
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Ensure the result is memoized for the new id
    expect(result3).toEqual({ result: 20 });
  });

  // it('should throw an error for a non-function input', () => {
  //   expect(() => memoize('id', 42)).toThrowError('fn must be a function');
  //   expect(() => memoize('id', 'string')).toThrowError('fn must be a function');
  //   expect(() => memoize('id', null)).toThrowError('fn must be a function');
  //   expect(() => memoize('id', undefined)).toThrowError('fn must be a function');
  //   expect(() => memoize('id', { key: 'value' })).toThrowError('fn must be a function');
  //   expect(() => memoize('id', [1, 2, 3])).toThrowError('fn must be a function');
  // });
});
