const debounce = <T, R>(fn: (...args: T[]) => R, delay: number) => {
  let timer: NodeJS.Timeout | number;
  return (...rest: T[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...rest);
    }, delay);
  };
};

export default debounce;
