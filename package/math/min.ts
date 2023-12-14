import curry, { Curry } from '../fp/curry';

type Min = (...nums: number[]) => number;

const min: Curry<Min> = curry((...nums) => {
  if (nums.length === 0) {
    throw new Error('No arguments provided to find the minimum value.');
  }
  return Math.min(...nums);
});

export default min;
