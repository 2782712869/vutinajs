import Monad from '../../package/functor/Monad';

// 测试 Monad 类型和 Monad 函数
describe('Monad', () => {
  // 测试 map 方法
  it('should map the value using map method', () => {
    const monad = Monad(42);
    const mappedMonad = monad.map((value) => value * 2);
    expect(mappedMonad.value).toBe(84);
  });

  // 测试 flatMap 方法
  it('should flatMap the value using flatMap method', () => {
    const monadValue = Monad(3);

    const result = monadValue.flatMap((value) => Monad(value * 2));

    expect(result.value).toBe(6);
  });

  // 测试链式操作
  it('should chain map and flatMap methods', () => {
    const monadValue = Monad(2);

    const result = monadValue
      .map((value) => value * 3)
      .flatMap((value) => Monad(value + 1));

    expect(result.value).toBe(7);
  });
});
