import partial from '../../package/fp/partial';

const add = (a: number, b: number, c: number) => a + b + c;

describe('partial function', () => {
  it('should partially apply the function', () => {
    const addPartial = partial(add, 1, 2);

    const result = addPartial(3);

    expect(result).toBe(6);
  });

  it('should throw an error if the first argument is not a function', () => {
    const invalidFunc: string = 'not a function';

    expect(() =>
      partial(invalidFunc as unknown as (...arrgs: unknown[]) => unknown, 1, 2),
    ).toThrow('func must be a function');
  });
});
