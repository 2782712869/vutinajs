import Maybe from '../../package/functor/Maybe';

// 测试 Maybe 类型和 Maybe 函数
describe('Maybe', () => {
  // 测试 map 方法
  it('should map the value using map method', () => {
    const maybeWithValue = Maybe(42);
    const maybeMapped = maybeWithValue.map((value) => value * 2);
    expect(maybeMapped.value).toBe(84);

    const maybeWithNullValue = Maybe(null);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const maybeMappedNull = maybeWithNullValue.map((value) => value * 2);
    expect(maybeMappedNull.value).toBeNull();
  });

  // 测试 map 方法链式调用
  it('should chain map methods', () => {
    const maybeWithValue = Maybe(2);

    const result = maybeWithValue
      .map((value) => value * 3)
      .map((value) => value + 1);

    expect(result.value).toBe(7);

    const maybeWithNullValue = Maybe(null);

    const resultNull = maybeWithNullValue
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .map((value) => value * 3)
      .map((value) => value + 1);

    expect(resultNull.value).toBeNull();
  });
});
