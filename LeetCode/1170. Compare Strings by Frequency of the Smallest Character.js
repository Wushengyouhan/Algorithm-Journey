/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  // 1. 求words每个字符串的f(w)，并且排序
  const freqs = words.map(w => f(w)).sort((a, b) => a - b);
  const ans = [];
  // 2. 遍历每个位置
  for (const q of queries) {
    const pos = upperBound(freqs, f(q));
    ans.push(words.length - pos);
  }
  return ans;
};

// 统计字符串中最小字符出现的频次
var f = function (s) {
  let minChar = 'z';
  let cnt = 0;
  for (const c of s) {
    if (c < minChar) {
      minChar = c;
      cnt = 1;
    } else if (c === minChar) {
      cnt++;
    }
  }
  return cnt;
};

// 二分查找第一个 > target位置的索引
var upperBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
