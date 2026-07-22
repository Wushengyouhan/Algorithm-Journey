/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const path = [];

  // 辅助函数：判断一个字符串的某个区间 [left, right] 是否为回文串
  const isPalindrome = function (str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  // 回溯主函数
  // startIndex 代表下一口准备下嘴的起始位置
  const backtrack = function (startIndex) {
    // 1. 终止条件：下嘴位置越过了热狗的末尾，说明吃完了
    if (startIndex >= s.length) {
      res.push([...path]); // 把合法方案存入结果
      return;
    }

    // 2. 单层循环逻辑：i 代表这一口咬到哪个位置结束
    for (let i = startIndex; i < s.length; i++) {
      // 核心剪枝：先检查这一口是不是合法的回文串
      if (isPalindrome(s, startIndex, i)) {
        // 如果合法，把这块切下来，吞进 path
        path.push(s.substring(startIndex, i + 1));
      } else {
        // 如果不合法，直接略过，去尝试咬更大的一口
        continue;
      }

      // 带着胃里现有的东西，递归进入下一层去吃剩下的部分
      // 剩下的部分从 i + 1 开始
      backtrack(i + 1);

      // 回溯：从下一层回来后，把刚才吞的那口吐出来，尝试别的吃法
      path.pop();
    }
  };

  // 从下标 0 开始吃
  backtrack(0);

  return res;
};
