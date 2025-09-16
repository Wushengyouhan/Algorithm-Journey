/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  // 1.排序
  nums.sort((a, b) => a - b);

  // 2.计算前缀和
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  // 3.处理queries
  for (let i = 0; i < queries.length; i++) {
    queries[i] = upperBound(nums, queries[i]);
  }
  return queries;
};

// 找第一个严格大于target的数的下标
var upperBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
