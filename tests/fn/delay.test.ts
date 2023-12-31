import delay from '../../package/fn/delay';

describe('delay function', () => {
  it('should delay the execution of the provided function', async () => {
    const mockFn = jest.fn();
    const delayedFn = delay(mockFn, 100);

    delayedFn('arg1', 'arg2');

    expect(mockFn).not.toHaveBeenCalled();

    // Wait for the delay to complete
    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  });

  // it('should throw an error for a non-function input', () => {
  //   expect(() => delay(42, 100)).toThrowError('fn must be a function');
  //   expect(() => delay('string', 100)).toThrowError('fn must be a function');
  //   expect(() => delay(null, 100)).toThrowError('fn must be a function');
  //   expect(() => delay(undefined, 100)).toThrowError('fn must be a function');
  //   expect(() => delay({ key: 'value' }, 100)).toThrowError('fn must be a function');
  //   expect(() => delay([1, 2, 3], 100)).toThrowError('fn must be a function');
  // });
});
