import includeStr from '../../package/string/includeStr';

describe('includeStr', () => {
  it('should return true if the target is found in the source', () => {
    expect(includeStr('apple,orange,banana', 'orange')).toBe(true);
  });

  it('should return false if the target is not found in the source', () => {
    expect(includeStr('apple,orange,banana', 'grape')).toBe(false);
  });

  it('should handle an empty source string', () => {
    expect(includeStr('', 'orange')).toBe(false);
  });

  // it('should throw an error if source is not a string', () => {
  //   expect(() => includeStr(42, 'orange')).toThrow('source must be a string');
  // });

  // it('should throw an error if target is not a string', () => {
  //   expect(() => includeStr('apple', 42)).toThrow('target must be a string');
  // });
});
