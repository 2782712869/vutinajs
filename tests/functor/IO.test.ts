import IO from '../../package/functor/IO';

describe('IO', () => {
  // 测试 effect 方法
  it('should execute the effect and return the result', () => {
    const effectFn = jest.fn(() => 'Hello, World!');
    const io = IO(effectFn);

    const result = io.effect();

    expect(effectFn).toHaveBeenCalledTimes(1);
    expect(result).toBe('Hello, World!');
  });

  // 测试 map 方法
  it('should map the result of the effect', () => {
    const effectFn = jest.fn(() => 'Hello');
    const io = IO(effectFn);
    const mappedIo = io.map((value) => value + ', World!');

    const result = mappedIo.effect();

    expect(result).toBe('Hello, World!');
  });

  // 测试 run 方法
  it('should execute the effect using the run method', () => {
    const effectFn = jest.fn(() => 'Hello, World!');
    const io = IO(effectFn);

    const result = io.run();

    expect(effectFn).toHaveBeenCalledTimes(1);
    expect(result).toBe('Hello, World!');
  });
});
