type IO<T> = {
  effect: () => T;
  map<U>(fn: (value: T) => U): IO<U>;
  run(): T;
};

function IO<T>(effect: () => T): IO<T> {
  return {
    effect,
    map<U>(fn: (value: T) => U): IO<U> {
      return IO(() => fn(effect()));
    },
    run(): T {
      return effect();
    },
  };
}

export default IO;
