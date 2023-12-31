import isEqual from '../../package/object/isEqual';

describe('isEqual function', () => {
  it('should return true for equal objects', () => {
    const obj1 = { key1: 'value1', key2: 'value2' };
    const obj2 = { key1: 'value1', key2: 'value2' };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for different objects', () => {
    const obj1 = { key1: 'value1', key2: 'value2' };
    const obj2 = { key1: 'value1', key2: 'differentValue' };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  it('should return false for objects with different lengths', () => {
    const obj1 = { key1: 'value1', key2: 'value2' };
    const obj2 = { key1: 'value1' };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for equal nested objects', () => {
    const obj1 = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
    const obj2 = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for different nested objects', () => {
    const obj1 = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
    const obj2 = {
      key1: 'value1',
      key2: { nestedKey: 'differentNestedValue' },
    };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  it('should handle non-object values', () => {
    expect(isEqual(42, '42' as unknown as number)).toBe(false);
    expect(isEqual('string', true as unknown as string)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });
});
