/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  const cnt = Array(24).fill(0);
  let ans = 0;

  for (const h of hours) {
    ans += cnt[(24 - (h % 24)) % 24];
    cnt[h % 24]++;
  }
  return ans;
};
