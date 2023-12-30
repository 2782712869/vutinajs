import sliceStr from '../../package/string/sliceStr';

describe('sliceStr', () => {
  it('should slice a string based on the provided start and end indices', () => {
    expect(sliceStr('abcdef', 1, 4)).toBe('bcd');
  });

  it('should handle a missing end index, slicing from start to the end of the string', () => {
    expect(sliceStr('abcdef', 2)).toBe('cdef');
  });

  it('should handle an empty source string', () => {
    expect(sliceStr('', 1, 4)).toBe('');
  });

  // it('should throw an error if source is not a string', () => {
  //   expect(() => sliceStr(42, 1, 4)).toThrow('source must be a string');
  // });
});
