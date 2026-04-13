/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = 0; // 慢指针：指向下一个有效元素将要存放的位置

  // 快指针 (通过 for 循环实现)：遍历所有元素找有效值
  for (let fast = 0; fast < nums.length; fast++) {
    // 如果遇到了不想删的值 (好东西)
    if (nums[fast] !== val) {
      // 把好东西挪到前面来
      nums[slow] = nums[fast];
      // 挪完之后，慢指针往前走一步，腾出位置给下一个好东西
      slow++;
    }
    // 如果遇到了想删的值 (val)，什么都不做，快指针自己会往前走
  }

  // 最终慢指针走的步数，恰好就是留下来的元素个数
  return slow;
};
