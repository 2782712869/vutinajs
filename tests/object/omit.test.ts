import omit from '../../package/object/omit';

describe('omit function', () => {
  it('should return an object with omitted properties', () => {
    const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
    const result = omit(obj, ['key1', 'key3']);
    expect(result).toEqual({ key2: 'value2' });
  });

  it('should return the same object for an empty props array', () => {
    const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
    const result = omit(obj, []);
    expect(result).toEqual(obj);
  });

  it('should return an empty object for an empty input object', () => {
    const result = omit({}, ['key1', 'key2']);
    expect(result).toEqual({});
  });

  // it('should handle non-object input', () => {
  //   expect(() => omit(42, ['key1'])).toThrow(TypeError);
  //   expect(() => omit('string', ['key1'])).toThrow(TypeError);
  //   expect(() => omit(null, ['key1'])).toThrow(TypeError);
  //   expect(() => omit(undefined, ['key1'])).toThrow(TypeError);
  //   expect(() => omit([1, 2, 3], ['key1'])).toThrow(TypeError);
  // });

  it('should ignore non-existent properties', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = omit(obj, ['key3']);
    expect(result).toEqual(obj);
  });
});
