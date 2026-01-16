/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const q = []; // 存放下标的双端队列
  const ans = []; // 结果数组

  for (let i = 0; i < nums.length; i++) {
    // 1. 【去尾】维护单调递减
    // 只要队尾元素比当前元素小，就踢掉（注意存的是下标，要取值比较）
    while (q.length > 0 && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }

    // 2. 【存号】入队
    q.push(i);

    // 3. 【去头】处理过期
    // 当前下标 i，窗口大小 k，说明下标 <= i-k 的都过期了
    // 因为每次只移动一步，最多只有一个过期，用 if 即可
    if (q[0] <= i - k) {
      q.shift();
    }

    // 4. 【记录】记录最大值
    // 当窗口完全形成后开始记录 (下标从 0 开始，所以是 i >= k-1)
    if (i >= k - 1) {
      ans.push(nums[q[0]]);
    }
  }

  return ans;
};
