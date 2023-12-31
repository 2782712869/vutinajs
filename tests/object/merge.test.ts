import merge from '../../package/object/merge';

describe('merge function', () => {
  it('should deep merge properties from multiple objects', () => {
    const obj1 = { key1: 'value1', key2: { subkey1: 'subvalue1' } };
    const obj2 = { key2: { subkey2: 'subvalue2' }, key3: 'value3' };
    const obj3 = { key1: 'newValue1', key2: { subkey2: 'newSubvalue2' } };

    const result = merge(obj1, obj2, obj3);

    expect(result).toEqual({
      key1: 'newValue1',
      key2: { subkey1: 'subvalue1', subkey2: 'newSubvalue2' },
      key3: 'value3',
    });
  });

  // it('should handle non-object arguments', () => {
  //   expect(() => merge(42)).toThrow(TypeError);
  //   expect(() => merge('string')).toThrow(TypeError);
  //   expect(() => merge(null)).toThrow(TypeError);
  //   expect(() => merge(undefined)).toThrow(TypeError);
  //   expect(() => merge([1, 2, 3])).toThrow(TypeError);
  // });

  it('should return the first object with deep merged properties', () => {
    const obj1 = { key1: 'value1', key2: { subkey1: 'subvalue1' } };
    const result = merge(obj1);
    expect(result).toBe(obj1);
  });

  it('should not modify the original objects', () => {
    const obj1 = { key1: 'value1', key2: { subkey1: 'subvalue1' } };
    const obj2 = { key2: { subkey2: 'subvalue2' }, key3: 'value3' };
    const obj3 = { key1: 'newValue1', key2: { subkey2: 'newSubvalue2' } };

    merge(obj1, obj2, obj3);

    expect(obj1).toEqual({ key1: 'value1', key2: { subkey1: 'subvalue1' } });
    expect(obj2).toEqual({ key2: { subkey2: 'subvalue2' }, key3: 'value3' });
    expect(obj3).toEqual({
      key1: 'newValue1',
      key2: { subkey2: 'newSubvalue2' },
    });
  });

  it('should handle empty source objects', () => {
    const result = merge({}, {}, {});
    expect(result).toEqual({});
  });
});
