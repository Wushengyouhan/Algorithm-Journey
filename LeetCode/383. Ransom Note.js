/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 1. 剪枝：如果赎金信比杂志还长，绝对拼不出来
  if (ransomNote.length > magazine.length) {
    return false;
  }

  // 2. 准备一个容量为 26 的仓库，记录 a-z 的库存
  const count = new Array(26).fill(0);
  // 基准偏移量：'a' 的 ASCII 码
  const base = 'a'.charCodeAt(0);

  // 3. 盘点杂志，增加库存
  for (const char of magazine) {
    // char.charCodeAt(0) - base 可以把 'a'-'z' 映射到 0-25
    count[char.charCodeAt(0) - base]++;
  }

  // 4. 遍历赎金信，开始提货
  for (const char of ransomNote) {
    const index = char.charCodeAt(0) - base;

    // 提走一件货，库存 -1
    count[index]--;

    // 核心判断：如果库存变成了负数，说明缺货了
    if (count[index] < 0) {
      return false;
    }
  }

  // 所有需要的字母都顺利提完，返回 true
  return true;
};
