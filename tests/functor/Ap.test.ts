import Ap from '../../package/functor/AP';

// 测试 Applicative 类型和 Ap 函数
describe('Applicative', () => {
  // 测试 map 方法
  it('should map the value using map method', () => {
    const applicative = Ap(42);
    const mappedApplicative = applicative.map((value) => value * 2);
    expect(mappedApplicative.value).toBe(84);
  });

  // 测试 ap 方法
  it('should apply the function using ap method', () => {
    const applicativeValue = Ap(3);
    const applicativeFunction = Ap((value: number) => value * 2);

    const result = applicativeValue.ap(applicativeFunction);

    expect(result.value).toBe(6);
  });

  // 测试链式操作
  it('should chain map and ap methods', () => {
    const applicativeValue = Ap(2);

    const result = applicativeValue
      .map((value) => value * 3)
      .ap(Ap((value) => value + 1));

    expect(result.value).toBe(7);
  });
});
