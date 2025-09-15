/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  const cnt = Array(121).fill(0);
  for (const age of ages) {
    cnt[age]++;
  }

  let ans = 0;
  // 记录窗口内的人数
  let cntWindow = 0;
  let left = 0;

  for (let right = 0; right < cnt.length; right++) {
    // 1. 进
    cntWindow += cnt[right];

    // 2. 出队直到恰好满足
    while (left * 2 <= right + 14) {
      cntWindow -= cnt[left];
      left++;
    }

    // 3. 更新
    // 不能对自己发请求，所以减掉
    if (cntWindow > 0) {
      ans += cnt[right] * cntWindow - cnt[right];
    }
  }
  return ans;
};
