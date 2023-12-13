type Min = (...nums: number[]) => number;

const min: Min = (...nums) => {
  if (nums.length === 0) {
    throw new Error('No arguments provided to find the minimum value.');
  }
  return Math.min(...nums);
};

export default min;
