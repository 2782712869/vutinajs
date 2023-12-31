import keys from '../../package/object/keys';
describe('keys function', () => {
  it('should return an array of keys for a non-empty object', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = keys(obj);
    expect(result).toEqual(['key1', 'key2']);
  });

  it('should return an empty array for an empty object', () => {
    const result = keys({});
    expect(result).toEqual([]);
  });

  it('should throw an error for non-object values', () => {
    expect(() => keys(42 as unknown as object)).toThrow(TypeError);
    expect(() => keys('string' as unknown as object)).toThrow(TypeError);
    expect(() => keys(null as unknown as object)).toThrow(TypeError);
    expect(() => keys(undefined as unknown as object)).toThrow(TypeError);
    expect(() => keys([1, 2, 3])).toThrow(TypeError);
  });
});
