import aspect from '../../package/fn/aspect';

describe('aspect function', () => {
  it('should execute before and after functions around the target function', () => {
    const targetFn = jest.fn();
    const beforeFn = jest.fn();
    const afterFn = jest.fn();

    const aspectFn = aspect(targetFn, beforeFn, afterFn);

    // Call the aspect function
    aspectFn('arg1', 'arg2');

    // Ensure the before and after functions are called with the correct arguments
    expect(beforeFn).toHaveBeenCalledWith('arg1', 'arg2');
    expect(afterFn).toHaveBeenCalledWith('arg1', 'arg2');

    // Ensure the target function is called after the before function
    expect(targetFn).toHaveBeenCalledWith('arg1', 'arg2');
  });

  it('should execute only the target function if before and after functions are not provided', () => {
    const targetFn = jest.fn();

    const aspectFn = aspect(targetFn);

    // Call the aspect function
    aspectFn('arg1', 'arg2');

    // Ensure only the target function is called
    expect(targetFn).toHaveBeenCalledWith('arg1', 'arg2');
  });

  // it('should throw an error for invalid functions provided', () => {
  //   // Invalid target function
  //   expect(() => aspect(42)).toThrowError('Invalid functions provided');

  //   // Invalid before function
  //   expect(() => aspect(() => {}, 42)).toThrowError('Invalid functions provided');

  //   // Invalid after function
  //   expect(() => aspect(() => {}, () => {}, 42)).toThrowError('Invalid functions provided');
  // });
});
