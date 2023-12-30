import pluck from '../../package/collect/pluck';

describe('pluck', () => {
  it('should extract values based on the provided property name', () => {
    const list = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];

    expect(pluck(list, 'id')).toEqual([1, 2, 3]);
    expect(pluck(list, 'name')).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should handle an empty array', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list: any[] = [];

    expect(pluck(list, 'id')).toEqual([]);
  });

  it('should throw an error if the provided list is not an array', () => {
    const invalidList = 'not an array';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid argument type
    expect(() => pluck(invalidList, 'id')).toThrow('list must be an array');
  });

  it('should throw an error if the provided property name is not present in the objects', () => {
    // const list = [
    //   { id: 1, name: 'Alice' },
    //   { id: 2, name: 'Bob' },
    //   { id: 3, name: 'Charlie' },
    // ];
    // 'age' property is not present in the objects
    // expect(() => pluck(list, 'age')).toThrow('Property name "age" is not present in the objects');
  });
});
