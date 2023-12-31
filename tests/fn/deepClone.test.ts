import deepClone from '../../package/fn/deepClone';

describe('deepClone function', () => {
  it('should deep clone objects and arrays', () => {
    const originalObj = {
      key1: 'value1',
      key2: [1, 2, 3],
      key3: { nestedKey: 'nestedValue' },
      key4: new Date(),
      key5: /regex/,
    };

    const clonedObj = deepClone(originalObj);

    // Ensure the cloned object is deeply equal to the original object
    expect(clonedObj).toEqual(originalObj);

    // Ensure the cloned object is not the same reference as the original object
    expect(clonedObj).not.toBe(originalObj);

    // Ensure the nested objects/arrays are not the same reference
    expect(clonedObj.key2).not.toBe(originalObj.key2);
    expect(clonedObj.key3).not.toBe(originalObj.key3);

    // Ensure the cloned date and regex objects are not the same reference
    expect(clonedObj.key4).not.toBe(originalObj.key4);
    expect(clonedObj.key5).not.toBe(originalObj.key5);
  });

  it('should handle circular references', () => {
    const circularObj = { key: 'value' } as { key: string } & {
      circularRef: unknown;
    };
    circularObj.circularRef = circularObj;

    const clonedObj = deepClone(circularObj);

    // Ensure the cloned object is not the same reference as the original object
    expect(clonedObj).not.toBe(circularObj);

    // Ensure the circular reference is preserved in the cloned object
    expect(clonedObj.circularRef).toBe(clonedObj);
  });

  // it('should throw an error for non-object input', () => {
  //   expect(() => deepClone(42)).toThrow('obj must be an object');
  //   expect(() => deepClone('string')).toThrow('obj must be an object');
  //   expect(() => deepClone(null)).toThrow('obj must be an object');
  //   expect(() => deepClone(undefined)).toThrow('obj must be an object');
  // });
});
