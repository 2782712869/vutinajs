import chunk from '../../package/array/chunk';

describe('chunk function', () => {
  it('should split the array into chunks of the given size', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7];
    const result = chunk(inputArray, 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it('should handle an empty array', () => {
    const result = chunk([], 3);
    expect(result).toEqual([]);
  });

  it('should handle a size greater than the array length', () => {
    const inputArray = [1, 2, 3];
    const result = chunk(inputArray, 5);
    expect(result).toEqual([inputArray]);
  });

  // it('should throw an error if the input is not an array', () => {
  //   expect(() => chunk('not an array', 3)).toThrow('list must be an array');
  // });

  it('should throw an error if size is not a positive integer', () => {
    expect(() => chunk([1, 2, 3], -2)).toThrow(
      'size must be a positive integer',
    );
    expect(() => chunk([1, 2, 3], 0)).toThrow(
      'size must be a positive integer',
    );
    expect(() => chunk([1, 2, 3], 2.5)).toThrow(
      'size must be a positive integer',
    );
  });
});
