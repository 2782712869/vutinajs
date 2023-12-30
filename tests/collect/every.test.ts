import every from '../../package/collect/every';

describe('every', () => {
  it('should return true if every element satisfies the predicate', () => {
    const list = [2, 4, 6, 8, 10];
    const predicate = (num: number) => num % 2 === 0;

    expect(every(predicate, list)).toBe(true);
  });

  it('should return false if at least one element does not satisfy the predicate', () => {
    const list = [2, 4, 6, 8, 11];
    const predicate = (num: number) => num % 2 === 0;

    expect(every(predicate, list)).toBe(false);
  });

  it('should return true for an empty array', () => {
    const list: number[] = [];
    const predicate = (num: number) => num % 2 === 0;

    expect(every(predicate, list)).toBe(true);
  });

  it('should throw an error if the provided list is not an array', () => {
    const predicate = (num: number) => num % 2 === 0;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => every(predicate, 'not an array')).toThrow(
      'list must be an array',
    );
  });
});
