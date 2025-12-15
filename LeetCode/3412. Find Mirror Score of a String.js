/**
 * @param {string} s
 * @return {number}
 */
var calculateScore = function (s) {
  let score = 0;

  // 1. 初始化 26 个栈
  // stacks[0] 对应 'a' 的下标列表，stacks[25] 对应 'z'
  const stacks = Array.from({ length: 26 }, () => []);

  // 2. 遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 获取当前字符的 0-25 索引 ('a' -> 0)
    const curr = s.charCodeAt(i) - 97;

    // 计算其镜像字符的索引
    const mirror = 25 - curr;

    // 3. 检查是否有可匹配的镜像
    if (stacks[mirror].length > 0) {
      // 贪心匹配：取出离当前位置最近的一个镜像下标 (Pop)
      const j = stacks[mirror].pop();
      // 累加分数
      score += i - j;
    } else {
      // 没有匹配：将当前下标入栈，等待被匹配 (Push)
      stacks[curr].push(i);
    }
  }

  return score;
};
