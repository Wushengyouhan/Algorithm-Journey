/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // JS 中字符串是不可变的，必须先转换为数组才能进行局部原地交换
  const arr = s.split('');

  // 辅助函数：翻转数组中从 [left, right] 区间的字符
  const reverse = function (left, right) {
    while (left < right) {
      // 利用 ES6 解构赋值快速交换
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };

  // ⭐ 核心魔法：外层循环的步长直接设置为 2k
  for (let i = 0; i < arr.length; i += 2 * k) {
    // 确定需要翻转的右边界
    // 如果剩下的字符不够 k 个了，右边界就是数组最后一位 (arr.length - 1)
    // 如果够 k 个，右边界就是起点的偏移 (i + k - 1)
    let right = Math.min(i + k - 1, arr.length - 1);

    // 调用翻转函数，精准翻转前 k 个字符
    reverse(i, right);
  }

  // 把数组重新拼回字符串
  return arr.join('');
};
