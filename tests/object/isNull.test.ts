import isNull from '../../package/object/isNull';

describe('isNull function', () => {
  it('should return true for null', () => {
    const result = isNull(null);
    expect(result).toBe(true);
  });

  it('should return false for non-null values', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('null')).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
  });
});
