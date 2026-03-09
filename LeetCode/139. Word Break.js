/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;

  // 1. 性能优化：将数组转为 Set，使物品查找的时间复杂度从 O(M) 降为 O(1)
  const wordSet = new Set(wordDict);

  // 2. 初始化 DP 数组，长度 n+1，全为 false
  const dp = new Array(n + 1).fill(false);

  // 3. Base Case：空背包是可以被装满的
  dp[0] = true;

  // 4. 动态规划 (完全背包求排列：先背包，后物品)
  // 外层遍历背包容量 i (字符串长度)
  for (let i = 1; i <= n; i++) {
    // 内层遍历物品 (通过枚举切割点 j 来模拟寻找最后一个放入的物品)
    // j 必须小于 i，因为右半边的物品至少要包含一个字符
    for (let j = 0; j < i; j++) {
      // 状态转移：如果前 j 个字符能拼成，且剩下的 s[j...i-1] 是一个字典单词
      if (dp[j] === true && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        // 只要找到一种合法的切割方式，容量 i 的背包就宣告装满了，无需继续尝试
        break;
      }
    }
  }

  return dp[n];
};

wordBreak('leetcode', ['leet', 'code']);
