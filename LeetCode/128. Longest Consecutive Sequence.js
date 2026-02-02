/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 1. 去重并支持 O(1) 查询
  const numSet = new Set(nums);
  let maxLen = 0;

  for (const num of numSet) {
    // 2. 只有当 num 是序列起点时，才开始向后计数
    // 如果 num-1 存在，说明 num 肯定不是起点，前面还有数，直接跳过
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLen = 1;

      // 3. 不断寻找下一个数
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentLen += 1;
      }

      // 4. 更新最大长度
      maxLen = Math.max(maxLen, currentLen);
    }
  }

  return maxLen;
};
