import trim from '../../package/string/trim';

describe('trim', () => {
  it('should trim leading and trailing whitespaces', () => {
    expect(trim('  hello  ')).toBe('hello');
  });

  it('should handle empty string', () => {
    expect(trim('')).toBe('');
  });

  it('should handle string with only whitespaces', () => {
    expect(trim('    ')).toBe('');
  });

  // it('should throw an error if value is not a string', () => {
  //   // Using a function in expect to check for throwing an error
  //   expect(() => trim(42)).toThrow('value must be a string');
  // });
});
