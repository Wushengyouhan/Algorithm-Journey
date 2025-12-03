/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  // 1. 定义差分数组
  // 年份范围 1950-2050，跨度 101 年。
  // 我们多给一点空间防止 death 越界，设为 102
  const offset = 1950;
  const diff = new Array(102).fill(0);

  // 2. 填充差分数组
  for (const [birth, death] of logs) {
    diff[birth - offset] += 1; // 出生：人口+1
    diff[death - offset] -= 1; // 死亡：人口-1 (注意是 death 当年减少)
  }

  // 3. 前缀和还原并找最大值
  let maxPop = 0; // 记录最大人口数
  let currentPop = 0; // 记录当前年份人口
  let ansYear = 1950; // 记录结果年份

  // 遍历每一年
  for (let i = 0; i < diff.length; i++) {
    currentPop += diff[i]; // 累加差分值得到当前人口

    // 如果当前人口 > 历史最大人口，更新结果
    // 注意：题目要求“如果由多个年份人口相同，返回年份最小的”
    // 所以这里必须是严格大于 (>)，不能是 >=
    if (currentPop > maxPop) {
      maxPop = currentPop;
      ansYear = i + offset;
    }
  }

  return ansYear;
};
