import includes from '../../package/array/includes';

describe('includes function', () => {
  it('should return true if the array includes the specified element', () => {
    const result = includes([1, 2, 3, 4], 3);
    expect(result).toBe(true);
  });

  it('should return false if the array does not include the specified element', () => {
    const result = includes(['apple', 'orange', 'banana'], 'grape');
    expect(result).toBe(false);
  });

  it('should handle an empty array', () => {
    const result = includes([], 'apple');
    expect(result).toBe(false);
  });

  it('should throw an error if the input is not an array', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => includes('not an array', 'apple')).toThrow(
      'arr must be an array',
    );
  });
});
