type Delay = <T>(
  fn: (...args: T[]) => void,
  time: number,
) => (...rest: T[]) => void;

const delay: Delay = (fn, time) => {
  return (...args) => {
    setTimeout(() => fn(...args), time);
  };
};

export default delay;
