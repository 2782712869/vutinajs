import curry, { Curry } from '../fp/curry';

type Subtract = (a: number, b: number) => number;

const subtract: Curry<Subtract> = curry((a, b) => a - b);

export default subtract;
