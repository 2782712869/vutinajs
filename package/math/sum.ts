type Sum = (...nums: number[]) => number;

const sum: Sum = (...nums) => {
  return nums.reduce((acc, cur) => acc + cur, 0);
};

export default sum;
