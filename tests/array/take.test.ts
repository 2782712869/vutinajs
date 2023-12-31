import take from '../../package/array/take';

describe('take function', () => {
  it('should take the specified number of elements from the beginning of the array', () => {
    const result = take(['apple', 'orange', 'banana'], 2);
    expect(result).toEqual(['apple', 'orange']);
  });

  it('should handle taking all elements if count is greater than the array length', () => {
    const result = take([1, 2, 3], 5);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    const result = take([], 3);
    expect(result).toEqual([]);
  });

  it('should handle taking 0 elements', () => {
    const result = take(['apple', 'orange', 'banana'], 0);
    expect(result).toEqual([]);
  });

  it('should throw an error if the input is not an array', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => take('not an array', 3)).toThrow('arr must be an array');
  });
});
