/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 1. 将 nums1 转化为 Set，自动去重，且查找速度变为 O(1)
  const set1 = new Set(nums1);

  // 2. 准备一个结果 Set，用于存放交集元素，同时保证交集结果不重复
  const resultSet = new Set();

  // 3. 遍历 nums2，去 set1 里找有没有
  for (const num of nums2) {
    if (set1.has(num)) {
      // 如果找到了，就是交集，放进结果 Set 里
      resultSet.add(num);
    }
  }

  // 4. 将 Set 转换回 Array 返回
  // 可以用 Array.from()，也可以用展开运算符 [...]
  return [...resultSet];
};
