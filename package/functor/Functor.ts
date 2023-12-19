type Functor<T> = {
  value: T;
  map: <U>(fn: (value: T) => U) => Functor<U>;
};

const Functor = <U>(value: U): Functor<U> => ({
  value,
  map: <V>(fn: (value: U) => V) => Functor(fn(value)),
});

export default Functor;
