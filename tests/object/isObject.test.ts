import isObject from '../../package/object/isObject';

describe('isObject function', () => {
  it('should return true for an object', () => {
    const result = isObject({ key: 'value' });
    expect(result).toBe(true);
  });

  it('should return false for non-object values', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject('not an object')).toBe(false);
    expect(isObject(['an', 'array'])).toBe(false);
  });
});
