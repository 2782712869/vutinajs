import once from '../../package/fn/once';

describe('once function', () => {
  it('should only allow the function to be called once', () => {
    const mockFn = jest.fn((x: number, y: number) => x + y);
    const onceFn = once(mockFn);

    // First call
    const result1 = onceFn(2, 3);
    expect(result1).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Subsequent calls should return the same result without calling the original function
    const result2 = onceFn(4, 5);
    const result3 = onceFn(6, 7);

    expect(result2).toBe(5);
    expect(result3).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  // it('should throw an error for a non-function input', () => {
  //   expect(() => once(42)).toThrowError('fn must be a function');
  //   expect(() => once('string')).toThrowError('fn must be a function');
  //   expect(() => once(null)).toThrowError('fn must be a function');
  //   expect(() => once(undefined)).toThrowError('fn must be a function');
  //   expect(() => once({ key: 'value' })).toThrowError('fn must be a function');
  //   expect(() => once([1, 2, 3])).toThrowError('fn must be a function');
  // });
});
