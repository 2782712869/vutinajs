import curry, { Curry } from '../fp/curry';

type Multiply = (a: number, b: number) => number;

const multiply: Curry<Multiply> = curry((a, b) => a * b);

export default multiply;
