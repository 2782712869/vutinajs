import min from '../../package/math/min';

describe('min', () => {
  it('should return the minimum value among the provided numbers', () => {
    expect(min(3, 7, 1, 9, 4)).toBe(1);
  });

  it('should handle a single number', () => {
    expect(min(10)).toBe(10);
  });

  it('should handle zero as a valid input', () => {
    expect(min(0, 2, 4, 6)).toBe(0);
  });

  it('should throw an error if no arguments are provided', () => {
    expect(() => min()).toThrow(
      'No arguments provided to find the minimum value.',
    );
  });
});
