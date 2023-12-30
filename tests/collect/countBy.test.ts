import countBy from '../../package/collect/countBy';

describe('countBy', () => {
  it('should count occurrences based on the provided iteratee', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const iteratee = (num: number) => (num % 2 === 0 ? 'even' : 'odd');

    expect(countBy(iteratee, list)).toEqual({ odd: 5, even: 4 });
  });

  it('should handle an empty array', () => {
    const list: number[] = [];
    const iteratee = (num: number) => (num % 2 === 0 ? 'even' : 'odd');

    expect(countBy(iteratee, list)).toEqual({});
  });

  it('should throw an error if the provided list is not an array', () => {
    const iteratee = (num: number) => (num % 2 === 0 ? 'even' : 'odd');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => countBy(iteratee, 'not an array')).toThrow(
      'list must be an array',
    );
  });
});
