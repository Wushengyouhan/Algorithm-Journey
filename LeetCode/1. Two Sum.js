/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 创建一个 Map 用于存放 {数字 => 对应的下标}
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num; // 计算需要的"另一半"

    // 如果另一半在 map 中，说明找到了
    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    // 否则，把当前数字及其下标存入 map，供后面的数字寻找
    map.set(num, i);
  }

  return []; // 题目保证一定有解，所以这里不会走到
};
