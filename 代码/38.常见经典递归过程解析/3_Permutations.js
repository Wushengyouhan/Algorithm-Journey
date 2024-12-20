/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  f(nums, 0, ans);
  return ans;
};

// 辅助递归函数，生成排列
function f(nums, i, ans) {
  // 当索引 i 等于数组的长度时，说明当前排列完成
  if (i === nums.length) {
    ans.push([...nums]);
  } else {
    // 依次把后面的数放到i位置，对i+1后面进行排列
    for (let j = i; j < nums.length; j++) {
      // 交换i，j位置的数
      swap(nums, i, j);
      // 对后面的进行排列
      f(nums, i + 1, ans);
      // 还原现场
      swap(nums, i, j);
    }
  }
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
