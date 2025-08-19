/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const cnt = Array(n + 2).fill(0);

  for (const book of bookings) {
    cnt[book[0]] += book[2];
    cnt[book[1] + 1] -= book[2];
  }

  //加工前缀和
  for (let i = 1; i < cnt.length; i++) {
    cnt[i] += cnt[i - 1];
  }

  const ans = [];
  for (let i = 0; i < n; i++) {
    ans[i] = cnt[i + 1];
  }

  return ans;
};
