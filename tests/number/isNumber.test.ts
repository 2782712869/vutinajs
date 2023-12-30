import isNumber from '../../package/number/isNumber';

describe('isNumber', () => {
  it('should return true for valid numbers', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
  });

  it('should return false for NaN', () => {
    expect(isNumber(NaN)).toBe(false);
  });

  it('should return false for non-number values', () => {
    expect(isNumber('string')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
  });

  it('should return false for non-numeric types', () => {
    expect(isNumber('42')).toBe(false);
    expect(isNumber(true)).toBe(false);
  });
});
