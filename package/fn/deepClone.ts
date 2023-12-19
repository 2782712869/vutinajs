import isArray from '../array/isArray';
import has from '../object/has';
import map from '../collect/map';

const deepClone = <T>(obj: T, clonedMap = new WeakMap()): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj as T;
  }

  if (clonedMap.has(obj)) {
    return clonedMap.get(obj) as T;
  }

  if (isArray(obj)) {
    const newArray = map((item) => deepClone(item, clonedMap), obj as T[]);
    clonedMap.set(obj, newArray);
    return newArray as T;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as T;
  }

  const clonedObj = {} as T;
  clonedMap.set(obj, clonedObj);

  for (const key in obj) {
    if (has(obj, key)) {
      clonedObj[key] = deepClone(obj[key], clonedMap);
    }
  }

  return clonedObj;
};

export default deepClone;
