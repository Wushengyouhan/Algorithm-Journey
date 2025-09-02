/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  const avgs = Array(nums.length).fill(-1);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // 1. 进
    sum += nums[i];

    if (i < 2 * k) {
      continue;
    }

    // 2. 更新
    avgs[i - k] = Math.floor(sum / (2 * k + 1));

    // 3. 出
    sum -= nums[i - 2*k];
  }

  return avgs;
};

getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3);
