import isString from '../../package/string/isString';

describe('isString', () => {
  it('should return true if the value is a string', () => {
    expect(isString('Hello')).toBe(true);
  });

  it('should return false if the value is not a string', () => {
    expect(isString(42)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});
