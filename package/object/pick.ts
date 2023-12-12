import each from '../collect/each';
type _Pick = <T extends Obj, K extends keyof T>(
  obj: T,
  props: K[] & string[],
) => Obj;

type Obj = {
  [key: string]: string | number;
};

const pick: _Pick = (obj, props) => {
  const result: Obj = {};
  each((key: string) => {
    result[key] = obj[key];
  }, props);
  return result;
};

export default pick;
