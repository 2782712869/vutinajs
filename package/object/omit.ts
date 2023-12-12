import each from '../collect/each';
import includes from '../array/includes';
import keys from './keys';

type _Omit = <T extends Obj, K extends keyof T>(
  obj: T,
  props: K[] & string[],
) => Obj;

type Obj = {
  [key: string]: string | number;
};

const omit: _Omit = (obj, props) => {
  const result: Obj = {};

  each((key: string) => {
    if (!includes(props, key)) {
      result[key] = obj[key];
    }
  }, keys(obj));

  return result;
};

export default omit;
