/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  const len = nums.length;
  const map = new Map();
  let good = 0;
  for (let i = 0; i < len; i++) {
    // 记录 nums[i] - i 各有多少个
    const x = nums[i] - i;
    const c = map.get(x) || 0;
    good += c;
    map.set(x, c + 1);
  }
  // 总对数 - 相等的对数
  return (len * (len - 1)) / 2 - good;
};
