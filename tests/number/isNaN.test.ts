import isNaN from '../../package/number/isNaN';

describe('isNaN', () => {
  it('should return true for NaN', () => {
    expect(isNaN(NaN)).toBe(true);
  });

  it('should return false for non-number values', () => {
    expect(isNaN('string')).toBe(false);
    expect(isNaN(true)).toBe(false);
    expect(isNaN(null)).toBe(false);
    expect(isNaN(undefined)).toBe(false);
    expect(isNaN({})).toBe(false);
    expect(isNaN([])).toBe(false);
  });

  it('should return false for numbers other than NaN', () => {
    expect(isNaN(42)).toBe(false);
    expect(isNaN(0)).toBe(false);
    expect(isNaN(-1)).toBe(false);
    expect(isNaN(Infinity)).toBe(false);
  });

  it('should return false for non-numeric types', () => {
    expect(isNaN('42')).toBe(false);
    expect(isNaN(true)).toBe(false);
  });
});
