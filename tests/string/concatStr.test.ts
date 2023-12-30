import concatStr from '../../package/string/concatStr';

describe('concatStr', () => {
  it('should concatenate multiple strings into a single string', () => {
    expect(concatStr('Hello', ', ', 'world', '!')).toBe('Hello, world!');
  });

  it('should handle a single string without additional strings', () => {
    expect(concatStr('Hello')).toBe('Hello');
  });

  it('should handle an empty source string', () => {
    expect(concatStr('', 'world', '!')).toBe('world!');
  });

  // it('should throw an error if the first argument is not a string', () => {
  //   expect(() => concatStr(42, 'world', '!')).toThrow('str must be a string');
  // });
});
