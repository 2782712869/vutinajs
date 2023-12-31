import join from '../../package/array/join';

describe('join function', () => {
  it('should join array elements with the specified separator', () => {
    const result = join(['apple', 'orange', 'banana'], ', ');
    expect(result).toBe('apple, orange, banana');
  });

  it('should handle an empty array', () => {
    const result = join([], ', ');
    expect(result).toBe('');
  });

  it('should handle an array with a single element', () => {
    const result = join(['apple'], ', ');
    expect(result).toBe('apple');
  });

  it('should throw an error if the input is not an array', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => join('not an array', ', ')).toThrow('arr must be an array');
  });

  it('should handle an empty separator', () => {
    const result = join(['apple', 'orange', 'banana'], '');
    expect(result).toBe('appleorangebanana');
  });
});
