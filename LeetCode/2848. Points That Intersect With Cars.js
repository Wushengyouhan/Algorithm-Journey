/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  // step 1: 初始化差分数组
  // 题目已知坐标最大是 100 (即下标 0~100)。
  // 差分算法核心是修改 [start] 和 [end + 1]。
  // 如果 end 是 100，我们需要修改下标 101。
  // 为了能访问下标 101，数组长度必须至少是 102 (下标范围 0~101)，否则会越界。
  // .fill(0) 确保数组初始全为 0，防止计算 NaN。
  const diff = new Array(102).fill(0);

  // step 2: 构造差分数组 (记录变化量)
  // 这一步的时间复杂度是 O(n)，n 是车的数量
  for (const [start, end] of nums) {
    diff[start] += 1; // 汽车进入 start 点，该点及之后“水位” +1
    diff[end + 1] -= 1; // 汽车在 end 点结束，所以在 end+1 点“水位” -1
  }

  let ans = 0; // 最终答案：有多少个点被覆盖
  let currentCars = 0; // 实时状态：当前这个点上实际停了几辆车 (前缀和)

  // step 3: 还原状态并统计 (前缀和)
  // 这一步的时间复杂度是 O(C)，C 是坐标范围 (102)
  // 这里的 d 相当于 diff[i]
  for (const d of diff) {
    currentCars += d; // 累加变化量 => 还原当前点的真实覆盖数

    // 只要当前位置覆盖数 > 0，说明至少有一辆车，计入结果
    if (currentCars > 0) {
      ans++;
    }
  }

  return ans;
};
