/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  // 第一阶段：龟兔赛跑，找相遇点
  // (用 do-while 是因为刚开始 slow 和 fast 都是 0)
  do {
    slow = nums[slow]; // 慢指针走一步
    fast = nums[nums[fast]]; // 快指针走两步
  } while (slow !== fast);

  // 第二阶段：找环的入口
  fast = 0; // 把快指针拨回起点

  // 两人以相同速度向前走，直到相遇
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast]; // 此时 fast 也只走一步了
  }

  // 相遇点就是数字“6”的交叉点，也就是那个重复的数字
  return slow;
};
