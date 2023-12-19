const Either = {
  Right: <T>(value: T) => ({
    value,
    map: <R>(fn: (value: T) => R) => Either.Right(fn(value)),
  }),
  Left: <T>(value: T) => ({
    value,
    map: () => Either.Left(value),
  }),
};

export default Either;
