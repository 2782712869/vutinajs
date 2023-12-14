import curry, { Curry } from '../fp/curry';

type Modulo = (a: number, b: number) => number;

const modulo: Curry<Modulo> = curry((a, b) => a % b);

export default modulo;
