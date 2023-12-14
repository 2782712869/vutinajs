import curry, { Curry } from '../fp/curry';

type Divide = (a: number, b: number) => number;

const divide: Curry<Divide> = curry((a, b) => a / b);

export default divide;
