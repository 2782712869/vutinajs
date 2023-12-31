import Task from '../../package/functor/Task';

// 模拟异步操作
const asyncOperation = (value: number, delay: number, shouldSucceed = true) =>
  new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      shouldSucceed ? resolve(value) : reject(new Error('Async error'));
    }, delay);
  });

// 测试 Task 类型和 Task 函数
describe('Task', () => {
  // 测试 fork 方法
  it('should execute the async operation using fork', (done) => {
    const task = Task<number>((resolve, reject) => {
      asyncOperation(42, 100).then(resolve).catch(reject);
    });

    task.fork(
      (result) => {
        expect(result).toBe(42);
        done();
      },
      (error) => {
        done.fail(error);
      },
    );
  });

  // 测试 map 方法
  it('should map the result of the async operation', (done) => {
    const task = Task<number>((resolve, reject) => {
      asyncOperation(42, 100).then(resolve).catch(reject);
    });

    const mappedTask = task.map((value) => value * 2);

    mappedTask.fork(
      (result) => {
        expect(result).toBe(84);
        done();
      },
      (error) => {
        done.fail(error);
      },
    );
  });

  // 测试 chain 方法
  it('should chain async operations', (done) => {
    const task = Task<number>((resolve, reject) => {
      asyncOperation(42, 100).then(resolve).catch(reject);
    });

    const chainedTask = task.chain((value) =>
      Task<number>((resolve, reject) => {
        asyncOperation(value * 2, 50)
          .then(resolve)
          .catch(reject);
      }),
    );

    chainedTask.fork(
      (result) => {
        expect(result).toBe(84);
        done();
      },
      (error) => {
        done.fail(error);
      },
    );
  });

  // 测试异步操作失败的情况
  it('should handle async operation failure', (done) => {
    const task = Task<number>((resolve, reject) => {
      asyncOperation(42, 100, false).then(resolve).catch(reject);
    });

    task.fork(
      () => {
        done.fail('Should not succeed');
      },
      (error) => {
        expect(error.message).toBe('Async error');
        done();
      },
    );
  });
});
