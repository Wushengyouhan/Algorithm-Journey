/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 1. 剪枝：长度不同，绝对不是异位词
  // 这也是后续省略“检查 Map 是否清零”这一步的理论基础
  if (s.length !== t.length) {
    return false;
  }

  // 2. 建立纯粹的哈希表仓库 (避免对象原型链污染)
  const map = new Map();

  // 3. 遍历 s (入库)
  for (const char of s) {
    // 获取当前数量，如果没有则默认为 0，然后加 1
    map.set(char, (map.get(char) || 0) + 1);
  }

  // 4. 遍历 t (出库)
  for (const char of t) {
    const count = map.get(char);

    // 核心判断：如果缺货 (count 为 0) 或根本没这个货 (count 为 undefined)
    // 在 JS 中，0 和 undefined 都是假值 (Falsy)，可以直接用 ! 取反判断
    if (!count) {
      return false; // 发现异常，立刻判死刑，提高效率
    }

    // 提走一件货，库存减 1
    map.set(char, count - 1);
  }

  // 5. 顺利提完所有货，且提货单数量和总库存数量一致，完美匹配
  return true;
};
