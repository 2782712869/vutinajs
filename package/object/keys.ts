const keys = <T extends object>(obj: T): string[] => {
  return Object.keys(obj);
};

export default keys;
