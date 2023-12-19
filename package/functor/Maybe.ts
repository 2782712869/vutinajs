type Maybe<T> = {
  value: T | null;
  map: <U>(fn: (value: T) => U) => Maybe<U>;
};

const Maybe = <T>(value: T | null): Maybe<T> => ({
  value,
  map: <U>(fn: (value: T) => U) => Maybe(value !== null ? fn(value) : null),
});

export default Maybe;
