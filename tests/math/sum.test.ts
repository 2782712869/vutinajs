import sum from '../../package/math/sum';

describe('sum', () => {
  it('should return the sum of provided numbers', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it('should handle a single number', () => {
    expect(sum(10)).toBe(10);
  });

  it('should handle zero as a valid input', () => {
    expect(sum(0, 2, 4, 6)).toBe(12);
  });

  it('should throw an error if no arguments are provided', () => {
    expect(() => sum()).toThrow('No arguments provided to find the sum value.');
  });
});
