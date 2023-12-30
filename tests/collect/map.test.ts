import map from '../../package/collect/map';

describe('map', () => {
  it('should apply the mapper function to each element in the array', () => {
    const arr = [1, 2, 3, 4];
    const mapper = (num: number) => num * 2;

    expect(map(mapper, arr)).toEqual([2, 4, 6, 8]);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    const mapper = (num: number) => num * 2;

    expect(map(mapper, arr)).toEqual([]);
  });

  it('should throw an error if the provided list is not an array', () => {
    const mapper = (num: number) => num * 2;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => map(mapper, 'not an array')).toThrow('list must be an array');
  });

  // Add more test cases as needed for additional functionality or edge cases
});
