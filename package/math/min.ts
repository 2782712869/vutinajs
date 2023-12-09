type Min = (...nums: number[]) => number;

const min: Min = (nums) => {
  return Math.min(nums);
};

export default min;
