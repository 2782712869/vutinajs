import Either from '../../package/functor/Either';

// 测试 Either
describe('Either', () => {
  // 测试 Right 分支
  describe('Right', () => {
    it('should map the value using map method', () => {
      const eitherRight = Either.Right(42);
      const mapped = eitherRight.map((value) => value * 2);
      expect(mapped.value).toBe(84);
    });
  });

  // 测试 Left 分支
  describe('Left', () => {
    it('should not map the value using map method', () => {
      const eitherLeft = Either.Left('Error');
      const mapped = eitherLeft.map((value) => value.length);
      expect(mapped.value).toBe('Error');
    });
  });
});
