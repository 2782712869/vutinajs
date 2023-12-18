import reduce from '../collect/reduce';

type Sum = (...nums: number[]) => number;

const sum: Sum = (...nums) => {
  if (nums.length === 0) {
    throw new Error('No arguments provided to find the sum value.');
  }
  return reduce((acc, cur) => acc + cur, 0, nums);
};

export default sum;
