import values from '../../package/object/values';

describe('values function', () => {
  it('should return an array of values for a non-empty object', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = values(obj);
    expect(result).toEqual(['value1', 'value2']);
  });

  it('should return an empty array for an empty object', () => {
    const result = values({});
    expect(result).toEqual([]);
  });

  it('should throw an error for non-object values', () => {
    expect(() => values(42 as unknown as object)).toThrow(TypeError);
    expect(() => values('string' as unknown as object)).toThrow(TypeError);
    expect(() => values(null as unknown as object)).toThrow(TypeError);
    expect(() => values(undefined as unknown as object)).toThrow(TypeError);
    expect(() => values([1, 2, 3])).toThrow(TypeError);
  });
});
