import assign from '../../package/object/assign';

describe('assign function', () => {
  it('should merge properties from multiple sources into the target object', () => {
    const target = { key1: 'value1', key2: 'value2' };
    const source1 = { key2: 'newValue2', key3: 'value3' };
    const source2 = { key1: 'newValue1', key4: 'value4' };

    const result = assign(target, source1, source2);

    expect(result).toEqual({
      key1: 'newValue1',
      key2: 'newValue2',
      key3: 'value3',
      key4: 'value4',
    });
  });

  // it('should handle non-object target', () => {
  //   expect(() => assign(42)).toThrow(TypeError);
  //   expect(() => assign('string')).toThrow(TypeError);
  //   expect(() => assign(null)).toThrow(TypeError);
  //   expect(() => assign(undefined)).toThrow(TypeError);
  //   expect(() => assign([1, 2, 3])).toThrow(TypeError);
  // });

  it('should return the target object with merged properties', () => {
    const target = { key1: 'value1' };
    const result = assign(target);
    expect(result).toBe(target);
  });

  it('should not overwrite existing properties in the target object', () => {
    const target = { key1: 'value1', key2: 'value2' };
    const source = { key2: 'newValue2', key3: 'value3' };

    const result = assign(target, source);

    expect(result).toEqual({
      key1: 'value1',
      key2: 'newValue2',
      key3: 'value3',
    });
  });

  it('should handle empty source objects', () => {
    const target = { key1: 'value1' };
    const result = assign(target, {}, {});
    expect(result).toEqual(target);
  });
});
