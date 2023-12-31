import isEmpty from '../../package/object/isEmpty';

describe('isEmpty function', () => {
  it('should return true for null', () => {
    const result = isEmpty(null);
    expect(result).toBe(true);
  });

  it('should return true for undefined', () => {
    const result = isEmpty(undefined);
    expect(result).toBe(true);
  });

  it('should return true for an empty array', () => {
    const result = isEmpty([]);
    expect(result).toBe(true);
  });

  it('should return true for an empty object', () => {
    const result = isEmpty({});
    expect(result).toBe(true);
  });

  it('should return true for other falsy values', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  it('should return false for non-empty values', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ key: 'value' })).toBe(false);
    expect(isEmpty('not empty')).toBe(false);
  });
});
