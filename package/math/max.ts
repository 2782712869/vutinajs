type Max = (...nums: number[]) => number;

const max: Max = (nums) => {
  return Math.max(nums);
};

export default max;
