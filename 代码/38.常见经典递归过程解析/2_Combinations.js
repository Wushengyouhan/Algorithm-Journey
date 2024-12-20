/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  f(nums, 0, [], 0, ans);
  return ans;
};

function f(nums, i, path, size, ans) {
  if (i === nums.length) {
    // 如果到达数组末尾，记录当前路径
    ans.push(path.slice(0, size));
  } else {
    // 找到当前数字相同的连续元素的结束位置
    // [1, 1, 1, 2, 3] 这里的j找到的是2的位置
    let j = i + 1;
    while (j < nums.length && nums[j] === nums[i]) {
      j++;
    }

    // 不选当前数字
    // 注意第二个参数是从j开始
    f(nums, j, path, size, ans);

    // 当前数字 nums[i]，选择 1 个、2 个、3 个... 直到所有连续相同数字
    for (; i < j; i++) {
      path[size++] = nums[i];
      // 注意第二个参数是从j开始
      f(nums, j, path, size, ans);
    }
  }
}
