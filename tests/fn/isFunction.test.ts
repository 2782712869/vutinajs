import isFunction from '../../package/fn/isFunction';

describe('isFunction function', () => {
  it('should return true for a function', () => {
    const func = () => {};
    expect(isFunction(func)).toBe(true);
  });

  it('should return false for non-function values', () => {
    expect(isFunction(42)).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction({ key: 'value' })).toBe(false);
    expect(isFunction([1, 2, 3])).toBe(false);
  });
});
