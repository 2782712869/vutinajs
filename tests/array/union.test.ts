import union from '../../package/array/union';

describe('union function', () => {
  it('should return the union of multiple arrays', () => {
    const result = union([1, 2], [2, 3], [3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle an empty input array', () => {
    const result = union([], [1, 2], [3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle empty arrays in the input', () => {
    const result = union([1, 2], [], [3, 4], []);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle multiple empty arrays', () => {
    const result = union([], [], []);
    expect(result).toEqual([]);
  });

  it('should throw an error if the first argument is not an array', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => union('not an array', [1, 2], [3, 4])).toThrow(
      'arr must be an array',
    );
  });
});
