import each from '../../package/collect/each';

describe('each', () => {
  it('should iterate over each element in the array', () => {
    const list = [1, 2, 3, 4];
    const mockIteratee = jest.fn();

    each(mockIteratee, list);

    expect(mockIteratee).toHaveBeenCalledTimes(4);
    expect(mockIteratee).toHaveBeenCalledWith(1, 0);
    expect(mockIteratee).toHaveBeenCalledWith(2, 1);
    expect(mockIteratee).toHaveBeenCalledWith(3, 2);
    expect(mockIteratee).toHaveBeenCalledWith(4, 3);
  });

  it('should handle an empty array', () => {
    const list: number[] = [];
    const mockIteratee = jest.fn();

    each(mockIteratee, list);

    expect(mockIteratee).not.toHaveBeenCalled();
  });

  it('should throw an error if the provided list is not an array', () => {
    const mockIteratee = jest.fn();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => each(mockIteratee, 'not an array')).toThrow(
      'list must be an array',
    );
  });
});
