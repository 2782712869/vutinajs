import each from '../collect/each';
import includes from '../array/includes';
import keys from './keys';

type _Omit = <T extends Obj>(obj: T, props: string[]) => Obj;

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
