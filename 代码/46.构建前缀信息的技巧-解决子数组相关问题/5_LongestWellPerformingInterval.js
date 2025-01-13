/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const map = new Map();
  map.set(0, -1);
  let ans = 0;
  for (let i = 0, sum = 0; i < hours.length; i++) {
    sum += hours[i] > 8 ? 1 : -1;
    // 0-i整个区间满足要求
    if (sum > 0) {
      ans = i + 1;
    } else {
      // 如果当前前缀和 sum <= 0，则需要检查是否存在前缀和为 sum - 1 的位置，这样可以找到最长的子区间。
      if (map.has(sum - 1)) {
        ans = Math.max(ans, i - map.get(sum - 1));
      }
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return ans;
};
