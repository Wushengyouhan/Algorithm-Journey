/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  // 求x的数位和
  function digitSum(x) {
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    return sum;
  }
  // 用来保存数位和对应的最大数字
  const map = new Map();

  let ans = -1;
  for (let n of nums) {
    const s = digitSum(n);
    // 更新答案
    if (map.has(s)) {
      ans = Math.max(ans, map.get(s) + n);
    }
    // 更新s
    map.set(s, Math.max(map.get(s) || 0, n));
  }
  return ans;
};
