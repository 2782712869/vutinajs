import replace from '../../package/string/replace';

describe('replace', () => {
  it('should replace occurrences in the string based on the provided target', () => {
    expect(replace('apple,orange,banana', ['orange', 'grape'])).toBe(
      'apple,grape,banana',
    );
  });

  it('should handle an empty source string', () => {
    expect(replace('', ['orange', 'grape'])).toBe('');
  });

  // it('should throw an error if source is not a string', () => {
  //   expect(() => replace(42, ['orange', 'grape'])).toThrow('source must be a string');
  // });

  // it('should throw an error if target is not a string array', () => {
  //   expect(() => replace('apple', 'orange')).toThrow('target must be an array of strings');
  // });
});
