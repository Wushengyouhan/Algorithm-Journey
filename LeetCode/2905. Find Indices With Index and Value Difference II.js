/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  let maxIdx = 0;
  let minIdx = 0;

  for (let j = indexDifference; j < nums.length; j++) {
    // 左端点
    let i = j - indexDifference;
    if (nums[i] > nums[maxIdx]) maxIdx = i;
    if (nums[i] < nums[minIdx]) minIdx = i;
    if (nums[maxIdx] - nums[j] >= valueDifference) return [maxIdx, j];
    if (nums[j] - nums[minIdx] >= valueDifference) return [minIdx, j];
  }
  return [-1, -1];
};
