type Applicative<T> = {
  value: T;
  map<U>(fn: (value: T) => U): Applicative<U>;
  ap<U>(applicative: Applicative<(value: T) => U>): Applicative<U>;
};

const Ap = <T>(value: T): Applicative<T> => ({
  value,
  map: function <U>(fn: (value: T) => U): Applicative<U> {
    return Ap(fn(this.value));
  },
  ap: function <U>(applicative: Applicative<(value: T) => U>): Applicative<U> {
    return Ap(applicative.value(this.value));
  },
});

export default Ap;
