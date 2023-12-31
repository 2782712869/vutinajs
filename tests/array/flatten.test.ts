import flatten from '../../package/array/flatten';

describe('flatten function', () => {
  it('should flatten a nested array', () => {
    const result = flatten([1, [2, [3, 4], 5], 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an already flat array', () => {
    const result = flatten([1, 2, 3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle an empty array', () => {
    const result = flatten([]);
    expect(result).toEqual([]);
  });

  it('should throw an error if the input is not an array', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => flatten('not an array')).toThrow('list must be an array');
  });
});
