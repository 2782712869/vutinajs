import max from '../../package/math/max';

describe('max', () => {
  it('should return the maximum value among the provided numbers', () => {
    expect(max(3, 7, 1, 9, 4)).toBe(9);
  });

  it('should handle a single number', () => {
    expect(max(10)).toBe(10);
  });

  it('should handle zero as a valid input', () => {
    expect(max(0, 2, 4, 6)).toBe(6);
  });

  it('should throw an error if no arguments are provided', () => {
    expect(() => max()).toThrow(
      'No arguments provided to find the maximum value.',
    );
  });
});
