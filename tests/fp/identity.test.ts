import identity from '../../package/fp/identity';

describe('identity function', () => {
  it('should return the same value as the input', () => {
    const input1 = 42;
    const input2 = 'hello';
    const input3 = { key: 'value' };

    expect(identity(input1)).toBe(input1);
    expect(identity(input2)).toBe(input2);
    expect(identity(input3)).toBe(input3);
  });
});
