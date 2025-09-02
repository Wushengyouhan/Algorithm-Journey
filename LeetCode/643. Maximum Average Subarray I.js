/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxS = -Infinity, sum = 0;

    for (let i = 0; i < nums.length; i++) {
      // 1. 进
      sum += nums[i]

      if ( i < k - 1) { // 窗口大小不足k
        continue;
      }

      // 2. 更新
      maxS = Math.max(maxS, sum);

      // 3. 出
      sum -= nums[ i - k + 1]
    }

    return maxS / k;
};