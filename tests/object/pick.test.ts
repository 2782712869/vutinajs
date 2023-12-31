import pick from '../../package/object/pick';

describe('pick function', () => {
  it('should return an object with selected properties', () => {
    const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
    const result = pick(obj, ['key1', 'key3']);
    expect(result).toEqual({ key1: 'value1', key3: 'value3' });
  });

  it('should return an empty object for an empty input object', () => {
    const result = pick({}, ['key1', 'key2'] as keyof object);
    expect(result).toEqual({});
  });

  // it('should handle non-object input', () => {
  //   expect(() => pick(42 as unknown as object, ['key1'] as keyof object)).toThrow(TypeError);
  //   expect(() => pick('string' as unknown as object, ['key1'] as keyof object)).toThrow(TypeError);
  //   expect(() => pick(null as unknown as object, ['key1'] as keyof object)).toThrow(TypeError);
  //   expect(() => pick(undefined as unknown as object, ['key1'] as keyof object)).toThrow(TypeError);
  //   expect(() => pick([1, 2, 3], ['key1'] as keyof object)).toThrow(TypeError);
  // });

  it('should ignore non-existent properties', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = pick(obj, ['key1', 'key3'] as keyof object);
    expect(result).toEqual({ key1: 'value1' });
  });
});
