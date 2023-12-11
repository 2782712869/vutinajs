const has = <T extends object>(obj: T, propertyName: string) => {
  return Object.hasOwn(obj, propertyName);
};

export default has;
