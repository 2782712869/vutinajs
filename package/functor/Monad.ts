type Monad<T> = {
  value: T;
  map<U>(fn: (value: T) => U): Monad<U>;
  flatMap<U>(fn: (value: T) => Monad<U>): Monad<U>;
};

const Monad = <T>(value: T): Monad<T> => ({
  value,
  map: function <U>(fn: (value: T) => U): Monad<U> {
    return Monad(fn(this.value));
  },
  flatMap: function <U>(fn: (value: T) => Monad<U>): Monad<U> {
    return fn(this.value);
  },
});

export default Monad;
