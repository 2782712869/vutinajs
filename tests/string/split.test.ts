import split from '../../package/string/split';

describe('split', () => {
  it('should split a string based on the provided separator', () => {
    expect(split('apple,orange,banana', ',')).toEqual([
      'apple',
      'orange',
      'banana',
    ]);
  });

  it('should limit the number of splits based on the provided limit', () => {
    expect(split('apple,orange,banana', ',', 2)).toEqual(['apple', 'orange']);
  });

  it('should handle an empty source string', () => {
    expect(split('', ',')).toEqual(['']);
  });

  // it('should throw an error if source is not a string', () => {
  //   expect(() => split(42, ',')).toThrow('source must be a string');
  // });
});
