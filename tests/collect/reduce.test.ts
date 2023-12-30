import reduce from '../../package/collect/reduce';

describe('reduce', () => {
  it('should reduce the array to a single value using the provided reducer', () => {
    const arr = [1, 2, 3, 4];
    const reducer = (acc: number, cur: number) => acc + cur;

    expect(reduce(reducer, 0, arr)).toBe(10);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    const reducer = (acc: number, cur: number) => acc + cur;

    expect(reduce(reducer, 0, arr)).toStrictEqual([]);
  });

  it('should throw an error if the provided array is not an array', () => {
    const reducer = (acc: number, cur: number) => acc + cur;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => reduce(reducer, 0, 'not an array')).toThrow(
      'array must be an array',
    );
  });

  // Add more test cases as needed for additional functionality or edge cases
});
