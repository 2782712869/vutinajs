import curry, { Curry } from '../fp/curry';

type Sum = (...nums: number[]) => number;

const sum: Curry<Sum> = curry((...nums) => {
  return nums.reduce((acc, cur) => acc + cur, 0);
});

export default sum;
