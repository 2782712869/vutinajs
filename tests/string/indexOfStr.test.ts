import indexOfStr from '../../package/string/indexOfStr';

describe('indexOfStr', () => {
  it('should return the index of the first occurrence of the target in the source', () => {
    expect(indexOfStr('apple,orange,banana', 'orange')).toBe(6);
  });

  it('should return -1 if the target is not found in the source', () => {
    expect(indexOfStr('apple,orange,banana', 'grape')).toBe(-1);
  });

  it('should handle an empty source string', () => {
    expect(indexOfStr('', 'orange')).toBe(-1);
  });

  // it('should throw an error if source is not a string', () => {
  //   expect(() => indexOfStr(42, 'orange')).toThrow('source must be a string');
  // });

  // it('should throw an error if target is not a string', () => {
  //   expect(() => indexOfStr('apple', 42)).toThrow('target must be a string');
  // });
});
