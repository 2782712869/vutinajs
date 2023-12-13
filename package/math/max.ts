type Max = (...nums: number[]) => number;

const max: Max = (...nums) => {
  if (nums.length === 0) {
    throw new Error('No arguments provided to find the maximum value.');
  }
  return Math.max(...nums);
};

export default max;
