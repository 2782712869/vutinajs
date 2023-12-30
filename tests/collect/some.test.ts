import some from '../../package/collect/some';

describe('some', () => {
  it('should return true if at least one element satisfies the iteratee', () => {
    const list = [1, 2, 3, 4];
    const iteratee = (value: number) => value % 2 === 0;

    expect(some(iteratee, list)).toBe(true);
  });

  it('should return false if no element satisfies the iteratee', () => {
    const list = [1, 3, 5, 7];
    const iteratee = (value: number) => value % 2 === 0;

    expect(some(iteratee, list)).toBe(false);
  });

  it('should handle an empty array', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list: any[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iteratee = <T>(value: T) => value === 'target';

    expect(some(iteratee, list)).toBe(false);
  });

  it('should throw an error if the provided list is not an array', () => {
    const invalidList = 'not an array';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iteratee = <T>(value: T) => value === 'target';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => some(iteratee, invalidList)).toThrow('list must be an array');
  });

  it('should throw an error if the provided iteratee is not a function', () => {
    const list = [1, 2, 3, 4];
    const invalidIteratee = 'not a function';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => some(invalidIteratee, list)).toThrow(
      'iteratee must be a function',
    );
  });
});
