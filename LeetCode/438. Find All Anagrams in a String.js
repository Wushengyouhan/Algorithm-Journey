/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pLen = p.length;
  const sLen = s.length;
  const ans = [];

  if (sLen < pLen) return [];

  // 1. 初始化计数数组 (a-z 对应 0-25)
  const pCount = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);

  // 辅助函数: 字符 -> 索引
  const getIdx = char => char.charCodeAt(0) - 97;

  // 2. 统计目标字符串 p
  for (const char of p) {
    pCount[getIdx(char)]++;
  }
  // 转字符串作为比较基准
  const pStr = pCount.toString();

  // 3. 滑动窗口遍历
  for (let i = 0; i < sLen; i++) {
    // [In] 进入窗口
    const inChar = s[i];
    windowCount[getIdx(inChar)]++;

    // [Check 1] 窗口还没满，继续攒
    if (i < pLen - 1) continue;

    // [Check 2] 窗口满了，检查是否匹配
    if (windowCount.toString() === pStr) {
      // 记录起始索引 (当前 i 是结尾，起始就是 i - len + 1)
      ans.push(i - pLen + 1);
    }

    // [Out] 离开窗口 (为下一次循环腾位置)
    // 移出最左边的那个字符
    const outChar = s[i - pLen + 1];
    windowCount[getIdx(outChar)]--;
  }

  return ans;
};
