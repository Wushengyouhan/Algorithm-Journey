/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];
  const path = [];

  // 1. 建立数字到字母的映射字典（巧用数组的下标对应数字 0-9）
  const map = [
    '', // 0 (无对应)
    '', // 1 (无对应)
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz', // 9
  ];

  // 2. 回溯辅助函数
  // index 代表当前正在处理 digits 中的第几个数字
  const backtrack = function (index) {
    // 终止条件：处理完了 digits 中的所有数字
    if (index === digits.length) {
      res.push(path.join('')); // 把数组拼成字符串存入结果
      return;
    }

    // 获取当前要处理的数字字符 (比如 '2')
    let digit = digits[index];
    // 去字典里查对应的字母串 (比如 "abc")
    let letters = map[digit];

    // 单层循环逻辑：遍历 "abc" (必须从 0 开始，因为集合相互独立)
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]); // 做选择
      backtrack(index + 1); // 递归进入下一层（处理下一个数字）
      path.pop(); // 撤销选择（回溯）
    }
  };

  // 题目保证了 length >= 1，所以直接从第 0 个数字开始处理
  backtrack(0);

  return res;
};
