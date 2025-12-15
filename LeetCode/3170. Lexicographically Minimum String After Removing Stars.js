/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  // 1. 创建 26 个桶（栈），用来存每种字母出现的下标
  // stacks[0] 存 'a' 的下标，stacks[1] 存 'b' 的下标...
  const stacks = Array.from({ length: 26 }, () => []);

  // 2. 第一次遍历：处理入栈和删除逻辑
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '*') {
      // 是字母：把下标压入对应的栈
      const code = s.charCodeAt(i) - 97; // 'a' -> 0
      stacks[code].push(i);
    } else {
      // 是星号：找最小字符并删除
      // 从 'a' (0) 遍历到 'z' (25)，找到第一个不为空的栈
      for (let j = 0; j < 26; j++) {
        if (stacks[j].length > 0) {
          // 找到了最小字符，弹出栈顶（即删除该字符最后出现的一次）
          stacks[j].pop();
          break; // 删完一个就停，处理下一个字符
        }
      }
    }
  }

  // 3. 收集剩余的下标
  const remainingIndices = [];
  for (const stack of stacks) {
    remainingIndices.push(...stack);
  }

  // 4. 下标必须排序，因为栈是按字母分开存的，顺序乱了
  // 比如 stacks[0] 有下标 5，stacks[1] 有下标 2，拼起来应该是 s[2]s[5]
  remainingIndices.sort((a, b) => a - b);

  // 5. 根据下标重组字符串
  let result = '';
  for (const idx of remainingIndices) {
    result += s[idx];
  }

  return result;
};
