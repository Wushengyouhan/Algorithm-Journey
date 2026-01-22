/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  // 初始化结果数组，默认全是 0
  // 如果最后还在栈里出不来，说明右边没有比它大的，保持 0 即可
  const res = new Array(n).fill(0);

  // 单调栈：存的是【索引】，不是温度值
  const stack = [];

  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i];

    // 核心逻辑：只要栈不为空，且当前温度大于栈顶温度
    // 说明找到了栈顶元素的“下一个更大值”
    while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop(); // 弹出栈顶索引
      res[prevIndex] = i - prevIndex; // 计算距离
    }

    // 当前索引入栈
    stack.push(i);
  }

  return res;
};
