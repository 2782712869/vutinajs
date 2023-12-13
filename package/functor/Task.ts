type TaskCallback<T> = (
  resolve: (value: T) => void,
  reject: (error: Error) => void,
) => void;

type Task<T> = {
  fork: (resolve: (value: T) => void, reject: (error: Error) => void) => void;
  map: <U>(fn: (value: T) => U) => Task<U>;
  chain: <U>(fn: (value: T) => Task<U>) => Task<U>;
};

function Task<T>(callback: TaskCallback<T>): Task<T> {
  return {
    fork: (resolve, reject) => callback(resolve, reject),
    map: <U>(fn: (value: T) => U): Task<U> =>
      Task((resolve, reject) =>
        callback(
          (value) => resolve(fn(value)),
          (error) => reject(error),
        ),
      ),
    chain: <U>(fn: (value: T) => Task<U>): Task<U> =>
      Task((resolve, reject) =>
        callback(
          (value) => fn(value).fork(resolve, reject),
          (error) => reject(error),
        ),
      ),
  };
}

export default Task;
