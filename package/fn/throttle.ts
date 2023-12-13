const throttle = <T, R>(fn: (...args: T[]) => R, delay: number) => {
  let lastExecTime = 0;
  return (...rest: T[]) => {
    const now = Date.now();
    if (now - lastExecTime >= delay) {
      fn(...rest);
      lastExecTime = now;
    }
  };
};

export default throttle;
