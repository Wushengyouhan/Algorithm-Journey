/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // JS 字符串不可变，转成数组模拟 C++ 的原地修改
  let arr = Array.from(s);

  // ==========================================
  // 第一步：移除多余空格 (快慢指针)
  // ==========================================
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    // 如果遇到了非空格字符 (即单词的开始)
    if (arr[fast] !== ' ') {
      // 1. 如果这不是第一个单词，我们需要在它前面手动补一个空格
      if (slow !== 0) {
        arr[slow] = ' ';
        slow++;
      }

      // 2. 把这一个完整的单词全部"抄"到 slow 的位置
      // 当 fast 没有越界 且 还是字母时，继续抄
      while (fast < arr.length && arr[fast] !== ' ') {
        arr[slow] = arr[fast];
        slow++;
        fast++;
      }
    }
  }
  // 循环结束后，slow 的值恰好就是去除了多余空格后的有效总长度
  arr.length = slow; // 截断数组，丢弃后面的废弃字符

  // 辅助函数：反转数组指定区间 [left, right]
  const reverse = (left, right) => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };

  // ==========================================
  // 第二步：将整个清理后的字符串反转
  // 例: "the sky" -> "yks eht"
  // ==========================================
  reverse(0, arr.length - 1);

  // ==========================================
  // 第三步：遍历数组，将每个单词再局部反转回来
  // 例: "yks eht" -> "sky the"
  // ==========================================
  let start = 0; // 记录当前单词的起始下标
  for (let i = 0; i <= arr.length; i++) {
    // 触发反转的条件：
    // 1. 遇到了空格 (说明一个单词结束了)
    // 2. 遍历到了数组末尾 (说明最后一个单词结束了)
    if (i === arr.length || arr[i] === ' ') {
      // 反转这个单词区间 [start, i - 1]
      reverse(start, i - 1);
      // 更新下一个单词的起点 (跳过当前空格)
      start = i + 1;
    }
  }

  // 最后转回字符串
  return arr.join('');
};
