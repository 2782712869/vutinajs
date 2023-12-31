import has from '../../package/object/has';

describe('has function', () => {
  it('should return true for an object with the specified property', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = has(obj, 'key1');
    expect(result).toBe(true);
  });

  it('should return false for an object without the specified property', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = has(obj, 'key3');
    expect(result).toBe(false);
  });

  it('should throw an error for non-object values', () => {
    expect(() => has(42 as unknown as object, 'key')).toThrow(
      'obj must be an object',
    );
    expect(() => has('string' as unknown as object, 'key')).toThrow(
      'obj must be an object',
    );
    expect(() => has(null as unknown as object, 'key')).toThrow(
      'obj must be an object',
    );
    expect(() => has(undefined as unknown as object, 'key')).toThrow(
      'obj must be an object',
    );
    expect(() => has([1, 2, 3], 'key')).toThrow('obj must be an object');
  });
});
