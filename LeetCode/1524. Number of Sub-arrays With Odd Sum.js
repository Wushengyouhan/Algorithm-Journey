/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const n = arr.length;
  const s = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + arr[i];
  }

  const mod = 10 ** 9 + 7;
  let ans = 0;
  // cnt[0]记录偶数个数，cnt[1]记录奇数个数
  const cnt = [0, 0];

  for (let sj of s) {
    const parity = sj % 2;
    // 奇偶性取反
    ans += cnt[parity ^ 1];
    cnt[parity] += 1;
  }

  return ans % mod;
};
