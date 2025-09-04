/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let s0 = 0;
  let s1 = 0;
  let maxS1 = 0;
  let arr = Array(customers.length).fill(0);

  for (let i = 0; i < customers.length; i++) {
    // 未生气时间的总人数
    s0 += grumpy[i] === 0 ? customers[i] : 0;

    // 生气时间数组
    arr[i] = grumpy[i] === 1 ? customers[i] : 0;
  }

  for (let i = 0; i < arr.length; i++) {
    // 1. 进
    s1 += arr[i];

    if (i < minutes - 1) {
      continue;
    }

    // 2.更新
    maxS1 = Math.max(s1, maxS1);

    // 3.出
    s1 -= arr[i - minutes + 1];
  }

  return s0 + maxS1;
};