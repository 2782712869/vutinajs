import Functor from '../../package/functor/Functor';

// 测试 Functor 类型和 Functor 函数
describe('Functor', () => {
  // 测试 map 方法
  it('should map the value using map method', () => {
    const functorWithValue = Functor(42);
    const functorMapped = functorWithValue.map((value) => value * 2);
    expect(functorMapped.value).toBe(84);

    const functorWithStringValue = Functor('Hello');
    const functorMappedString = functorWithStringValue.map(
      (value) => value.length,
    );
    expect(functorMappedString.value).toBe(5);
  });

  // 测试 map 方法链式调用
  it('should chain map methods', () => {
    const functorWithValue = Functor(2);

    const result = functorWithValue
      .map((value) => value * 3)
      .map((value) => value + 1);

    expect(result.value).toBe(7);

    const functorWithStringValue = Functor('World');

    const resultString = functorWithStringValue
      .map((value) => value.length)
      .map((value) => value * 2);

    expect(resultString.value).toBe(10);
  });
});
