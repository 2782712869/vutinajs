import concat from '../../package/array/concat';

describe('concat function', () => {
  it('should concatenate arrays', () => {
    const result = concat([1, 2], [3, 4], [5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an empty input array', () => {
    const result = concat([], [1, 2], [3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle empty arrays in the input', () => {
    const result = concat([1, 2], [], [3, 4], []);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle multiple empty arrays', () => {
    const result = concat([], [], []);
    expect(result).toEqual([]);
  });

  // it('should throw an error if the first argument is not an array', () => {
  //   expect(() => concat('not an array', [1, 2], [3, 4])).toThrow('arr must be an array');
  // });

  it('should handle no additional arrays', () => {
    const result = concat([1, 2]);
    expect(result).toEqual([1, 2]);
  });
});
