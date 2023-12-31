import debounce from '../../package/fn/debounce';

jest.useFakeTimers();

describe('debounce function', () => {
  it('should debounce the execution of the provided function', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    // Call the debounced function multiple times within the delay period
    debouncedFn('arg1');
    debouncedFn('arg2');
    debouncedFn('arg3');

    // Ensure the function is not called immediately
    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward time
    jest.advanceTimersByTime(150);

    // Ensure the function is called only once after the delay
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('arg3');
  });

  // it('should throw an error for a non-function input', () => {
  //   expect(() => debounce(42, 100)).toThrowError('fn must be a function');
  //   expect(() => debounce('string', 100)).toThrowError('fn must be a function');
  //   expect(() => debounce(null, 100)).toThrowError('fn must be a function');
  //   expect(() => debounce(undefined, 100)).toThrowError('fn must be a function');
  //   expect(() => debounce({ key: 'value' }, 100)).toThrowError('fn must be a function');
  //   expect(() => debounce([1, 2, 3], 100)).toThrowError('fn must be a function');
  // });
});
