/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 1. 排序
  // 规则：身高 h 降序；身高相同时，k 升序
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]; // h 相同，k 小的在前
    } else {
      return b[0] - a[0]; // h 大的在前
    }
  });

  const queue = [];

  // 2. 插入
  // 既然大家都比我高（或相等），那我的 k 是几，我就站第几号位
  for (const p of people) {
    // splice(插入索引, 删除数量, 插入元素)
    queue.splice(p[1], 0, p);
  }

  return queue;
};
