type Applicative<T> = {
  value: T;
  map<U>(fn: (value: T) => U): Applicative<U>;
  ap<U>(applicative: Applicative<(value: T) => U>): Applicative<U>;
};

const of = <T>(value: T): Applicative<T> => ({
  value,
  map: function <U>(fn: (value: T) => U): Applicative<U> {
    return of(fn(this.value));
  },
  ap: function <U>(applicative: Applicative<(value: T) => U>): Applicative<U> {
    return of(applicative.value(this.value));
  },
});

export default of;
