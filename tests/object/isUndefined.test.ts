import isUndefined from '../../package/object/isUndefined';

describe('isUndefined function', () => {
  it('should return true for undefined', () => {
    const result = isUndefined(undefined);
    expect(result).toBe(true);
  });

  it('should return false for non-undefined values', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined('undefined')).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
  });
});
