/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // 1. 统计每个任务出现的频率
  const freq = new Array(26).fill(0);
  let maxFreq = 0; // 记录出现次数最多的任务的频次

  for (const task of tasks) {
    // 利用 ASCII 码映射为 0-25 的索引 (空间严格 O(1))
    const index = task.charCodeAt(0) - 65;
    freq[index]++;
    // 同步更新最大频率
    maxFreq = Math.max(maxFreq, freq[index]);
  }

  // 2. 统计有多少个任务同样具有 maxFreq 的频率 (计算尾巴长度)
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxFreq) {
      maxCount++;
    }
  }

  // 3. 利用木桶公式计算所需时间 (算出了有 idle 情况下的保底时间)
  const calculatedTime = (maxFreq - 1) * (n + 1) + maxCount;

  // 4. 返回公式结果与任务总数中的较大值 (完美处理沙子溢出情况)
  return Math.max(calculatedTime, tasks.length);
};
