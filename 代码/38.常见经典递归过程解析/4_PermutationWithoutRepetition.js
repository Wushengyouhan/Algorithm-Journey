/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  f(nums, 0, ans);
  return ans;
};

function f(nums, i, ans) {
  if (i === nums.length) {
    ans.push([...nums]);
  } else {
    const set = new Set();
    for (let j = i; j < nums.length; j++) {
      // 如果nums[j]这个数字，没有放过i位置，才进行下面的递归
      // 这样可以避免重复值的影响
      if (!set.has(nums[j])) {
        // j位置这个数已经放过i位置了
        set.add(nums[j]);
        swap(nums, i, j);
        f(nums, i + 1, ans);
        swap(nums, i, j);
      }
    }
  }
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
