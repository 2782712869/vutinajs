import curry, { Curry } from '../fp/curry';

type Add = (a: number, b: number) => number;

const add: Curry<Add> = curry((a, b) => a + b);

export default add;
