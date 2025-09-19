/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function (nums, queries) {
  const n = nums.length;
  // 每个数字的索引升序字典
  let indices = new Map();
  for (let i = 0; i < n; i++) {
    if (!indices.has(nums[i])) {
      indices.set(nums[i], []);
    }
    indices.get(nums[i])?.push(i);
  }

  // 为每个值的索引表添加前后哨兵
  for (let p of indices.values()) {
    // 在数组修改前需要把第一个出现的位置保存下来
    const i0 = p[0];
    // 添加前哨兵
    p.unshift(p[p.length - 1] - n);
    // 添加后哨兵
    p.push(i0 + n);
  }
  // console.log(indices);

  // 处理每个查询
  for (let qi = 0; qi < queries.length; qi++) {
    const i = queries[qi];
    const p = indices.get(nums[i]);

    // 原本只有一个值
    if (p.length === 3) {
      queries[qi] = -1;
    } else {
      // 找到索引i的在p里面的位置
      const j = lowerBound(p, i);
      queries[qi] = Math.min(p[j + 1] - i, i - p[j - 1]);
    }
  }
  return queries;
};

var lowerBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
