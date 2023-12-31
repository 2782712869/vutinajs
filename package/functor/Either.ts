const Either = {
  Right: <T>(value: T) => ({
    value,
    map: <R>(fn: (value: T) => R) => Either.Right(fn(value)),
  }),
  Left: <T>(value: T) => ({
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    map: <R>(fn: (value: T) => R) => Either.Left(value),
  }),
};

export default Either;
