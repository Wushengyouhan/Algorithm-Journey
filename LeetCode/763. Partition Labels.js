/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // 1. 记录每个字符最后出现的位置
  // 也可以用 new Array(26) 配合 charCodeAt 优化空间，但 Object 更直观
  const lastPos = {};
  for (let i = 0; i < s.length; i++) {
    lastPos[s[i]] = i;
  }

  const result = [];
  let start = 0; // 当前片段起点
  let end = 0; // 当前片段必须延伸到的最远位置

  // 2. 贪心遍历
  for (let i = 0; i < s.length; i++) {
    // 更新当前片段的最远边界
    end = Math.max(end, lastPos[s[i]]);

    // 如果当前位置追上了最远边界，说明可以切分
    if (i === end) {
      // 计算长度
      result.push(i - start + 1);
      // 更新下一段的起点
      start = i + 1;
    }
  }

  return result;
};
