import isArray from '../../package/array/isArray';

describe('isArray function', () => {
  it('should return true for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([])).toBe(true);
  });

  it('should return false for non-arrays', () => {
    expect(isArray(42)).toBe(false);
    expect(isArray('not an array')).toBe(false);
    expect(isArray({ key: 'value' })).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});
