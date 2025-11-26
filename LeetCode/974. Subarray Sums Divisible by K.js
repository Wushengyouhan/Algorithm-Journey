/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  // 用数组来替代哈希表，因为余数的范围固定是 0 到 k-1
  // 索引代表余数，值代表该余数出现的次数
  const map = new Array(k).fill(0);
  let ans = 0;
  let sum = 0;
  // 对于这种一开始余数就是0的，需要记录[5]
  map[0] = 1;
  for (let x of nums) {
    // 计算前缀和
    sum += x;
    let remainder = ((sum % k) + k) % k;
    ans += map[remainder];
    map[remainder]++;
  }

  return ans;
};
