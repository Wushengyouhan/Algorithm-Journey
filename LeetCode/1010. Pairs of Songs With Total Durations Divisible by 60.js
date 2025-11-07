/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const cnt = Array(60).fill(0);
  let ans = 0;
  for (const t of time) {
    reg = t % 60;
    ans += cnt[(60 - reg) % 60];
    cnt[reg]++;
  }
  return ans;
};
