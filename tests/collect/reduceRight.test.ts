import reduceRight from '../../package/collect/reduceRight';

describe('reduceRight', () => {
  it('should reduce the array from right to left using the provided callback', () => {
    const array = [1, 2, 3, 4];
    const callback = (acc: number, cur: number) => acc - cur;

    expect(reduceRight(callback, 0, array)).toBe(-10);
  });

  it('should handle an empty array', () => {
    const array: number[] = [];
    const callback = (acc: number, cur: number) => acc - cur;

    expect(reduceRight(callback, 0, array)).toStrictEqual([]);
  });

  it('should throw an error if the provided array is not an array', () => {
    const callback = (acc: number, cur: number) => acc - cur;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => reduceRight(callback, 0, 'not an array')).toThrow(
      'array must be an array',
    );
  });

  // Add more test cases as needed for additional functionality or edge cases
});
