import filter from '../../package/collect/filter';

describe('filter', () => {
  it('should filter elements based on the provided predicate', () => {
    const list = [1, 2, 3, 4, 5, 6];
    const predicate = (num: number) => num % 2 === 0;

    expect(filter(predicate, list)).toEqual([2, 4, 6]);
  });

  it('should handle an empty array', () => {
    const list: number[] = [];
    const predicate = (num: number) => num % 2 === 0;

    expect(filter(predicate, list)).toEqual([]);
  });

  it('should throw an error if the provided list is not an array', () => {
    const predicate = (num: number) => num % 2 === 0;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => filter(predicate, 'not an array')).toThrow(
      'list must be an array',
    );
  });

  // Add more test cases as needed for additional functionality or edge cases
});
