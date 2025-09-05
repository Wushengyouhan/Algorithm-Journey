/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let ans = 0;
  let cnt = new Map();
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    // 1. 进
    const f = fruits[right];
    cnt.set(f, (cnt.get(f) || 0) + 1);

    // 不满足条件
    while (cnt.size > 2) {
      const out = fruits[left];
      cnt.set(out, cnt.get(out) - 1);
      if (cnt.get(out) === 0) {
        cnt.delete(out);
      }
      left++;
    }

    // 2. 更新
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};