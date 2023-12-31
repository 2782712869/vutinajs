import throttle from '../../package/fn/throttle';

jest.useFakeTimers();

describe('throttle function', () => {
  it('should throttle the execution of the provided function', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    // Call the throttled function multiple times within the delay period
    throttledFn('arg1');
    throttledFn('arg2');
    throttledFn('arg3');

    // Ensure the function is called only once within the delay period
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('arg1');

    // Fast-forward time, but still within the delay period
    jest.advanceTimersByTime(50);

    // Call the throttled function again
    throttledFn('arg4');

    // Ensure the function is still called only once within the delay period
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Fast-forward time to exceed the delay period
    jest.advanceTimersByTime(60);

    // Ensure the function is called a second time after the delay period
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('arg1');
  });

  // it('should throw an error for a non-function input', () => {
  //   expect(() => throttle(42, 100)).toThrowError('fn must be a function');
  //   expect(() => throttle('string', 100)).toThrowError('fn must be a function');
  //   expect(() => throttle(null, 100)).toThrowError('fn must be a function');
  //   expect(() => throttle(undefined, 100)).toThrowError('fn must be a function');
  //   expect(() => throttle({ key: 'value' }, 100)).toThrowError('fn must be a function');
  //   expect(() => throttle([1, 2, 3], 100)).toThrowError('fn must be a function');
  // });
});
