/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;
  // 1. 分组: Map<数值, 下标数组[]>
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    const val = nums[i];
    if (!groups.has(val)) {
      groups.set(val, []);
    }
    groups.get(val).push(i);
  }

  const ans = Array(n).fill(0);

  for (const indices of groups.values()) {
    const len = indices.length;
    if (len === 1) continue;

    const totalSum = indices.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;

    for (let i = 0; i < len; i++) {
      // 实际的索引
      const p = indices[i];
      const leftPart = i * p - leftSum;
      const rightPart = totalSum - leftSum - p - (len - i - 1) * p;
      ans[p] = leftPart + rightPart;
      leftSum += p;
    }
  }

  return ans;
};
