/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
  let left = 0;
  let right = actions.length - 1;

  // 当左右指针相遇时，说明所有元素都检查过了
  while (left < right) {
    // 1. 左指针向右走，只要是奇数就放过，遇到偶数才停
    // 注意要加上 left < right 防越界
    // 奇偶判断技巧：按位与 1 (num & 1) 比模运算 (num % 2) 更高效
    while (left < right && (actions[left] & 1) === 1) {
      left++;
    }

    // 2. 右指针向左走，只要是偶数就放过，遇到奇数才停
    while (left < right && (actions[right] & 1) === 0) {
      right--;
    }

    // 3. 此时 left 指向左边的偶数，right 指向右边的奇数，交换它们！
    if (left < right) {
      [actions[left], actions[right]] = [actions[right], actions[left]];
      // 交换完别忘了往中间走一步
      left++;
      right--;
    }
  }

  return actions;
};
