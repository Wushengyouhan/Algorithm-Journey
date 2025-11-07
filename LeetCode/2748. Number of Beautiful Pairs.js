/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function getFirst(n) {
    while (n >= 10) {
      n = Math.floor(n / 10);
    }
    return n;
  }
  let ans = 0;
  // 存放每个数字第一位数的分布
  const cnt = Array(10).fill(0);
  for (let n of nums) {
    for (let i = 1; i <= 9; i++) {
      if (gcd(i, n % 10) === 1) {
        ans += cnt[i];
      }
    }
    // 把第一位信息保存
    cnt[getFirst(n)]++;
  }
  return ans;
};
