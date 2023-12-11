type IO<T> = {
  effect: () => T;
  map<U>(fn: (value: T) => U): IO<U>;
  run(): T;
};

// 使用函数返回对象的方式实现 IO 函子
function io<T>(effect: () => T): IO<T> {
  return {
    effect,
    map<U>(fn: (value: T) => U): IO<U> {
      return io(() => fn(effect()));
    },
    run(): T {
      return effect();
    },
  };
}

// 示例用法
const ioEffect: IO<number> = io(() => {
  console.log('Executing side effect');
  return 42;
});

const doubledResult = ioEffect.map((value) => value * 2);

console.log(doubledResult.run()); // 输出: Executing side effect, 84

type TaskCallback<T> = (
  resolve: (value: T) => void,
  reject: (error: Error) => void,
) => void;

type Task<T> = {
  fork: (resolve: (value: T) => void, reject: (error: Error) => void) => void;
  map: <U>(fn: (value: T) => U) => Task<U>;
  chain: <U>(fn: (value: T) => Task<U>) => Task<U>;
};

function task<T>(callback: TaskCallback<T>): Task<T> {
  return {
    fork: (resolve, reject) => callback(resolve, reject),
    map: <U>(fn: (value: T) => U): Task<U> =>
      task((resolve, reject) =>
        callback(
          (value) => resolve(fn(value)),
          (error) => reject(error),
        ),
      ),
    chain: <U>(fn: (value: T) => Task<U>): Task<U> =>
      task((resolve, reject) =>
        callback(
          (value) => fn(value).fork(resolve, reject),
          (error) => reject(error),
        ),
      ),
  };
}

// 示例用法
const asyncTask: Task<number> = task((resolve) => {
  setTimeout(() => resolve(42), 1000);
});

const doubledTask = asyncTask.map((value) => value * 2);

doubledTask.fork(
  (result) => console.log('Success:', result),
  (error) => console.error('Error:', error),
);

function chainableBuilder(initialValue: number) {
  let value = initialValue;

  const add = (num: number) => {
    value += num;
    return chainableBuilder(value);
  };

  const multiply = (num: number) => {
    value *= num;
    return chainableBuilder(value);
  };

  const subtract = (num: number) => {
    value -= num;
    return chainableBuilder(value);
  };

  const divide = (num: number) => {
    value /= num;
    return chainableBuilder(value);
  };

  const getValue = () => value;

  return { add, multiply, subtract, divide, getValue };
}

// 示例用法
const result = chainableBuilder(0)
  .add(5)
  .multiply(2)
  .subtract(3)
  .divide(2)
  .getValue();

console.log(result); // 输出: 5
