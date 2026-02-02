/**
 * @param {number[]} g - 孩子的胃口
 * @param {number[]} s - 饼干的尺寸
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 1. 必须先排序 (JS sort 默认是字典序，必须传参)
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;

  // 2. 遍历每一块饼干
  for (let cookie = 0; cookie < s.length; cookie++) {
    // [优化点]：如果所有孩子都喂饱了，没必要再看剩下的饼干了
    if (child === g.length) {
      break;
    }

    // 3. 尝试匹配
    // 如果当前饼干 >= 当前孩子的胃口
    if (s[cookie] >= g[child]) {
      child++; // 这个孩子满足了，看下一个孩子
    }
    // 如果不满足，循环自动进入下一块饼干 (cookie++)
  }

  return child;
};
