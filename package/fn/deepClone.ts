import isArray from '../array/isArray';
import isNull from '../object/isNull';
import has from '../object/has';
import map from '../collect/map';

type NotObj<T> = T extends object ? never : T;

function deepClone<T>(obj: null | NotObj<T>): null | NotObj<T>;
function deepClone<T>(obj: T): T;
function deepClone<T extends object>(obj: T) {
  if (isNull(obj) || typeof obj !== 'object') {
    return obj;
  }
  if (isArray(obj)) {
    return map((item) => deepClone(item), obj as unknown[]);
  }
  const result: {
    [key: string]: unknown;
  } = {};
  for (const key in obj) {
    if (has(obj, key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

export default deepClone;
