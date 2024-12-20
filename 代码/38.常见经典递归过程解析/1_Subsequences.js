/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return string字符串一维数组
 */
function generatePermutation(s) {
  // write code here
  let sArr = s.split("");
  let set = new Set();
  f(sArr, 0, "", set);
  return [...set];
}

// 递归函数：生成所有可能的子序列
// s：字符数组，i：当前处理的索引，path：当前路径字符串，set：结果集合
function f(s, i, path, set) {
  // 如果遍历到字符数组末尾，将路径加入集合
  // 注意条件，当相等时，最后一个字符已经处理完了
  if (i === s.length) {
    set.add(path);
  } else {
    // 选择当前字符加入路径
    f(s, i + 1, path + s[i], set);
    // 不选择当前字符加入路径
    f(s, i + 1, path, set);
  }
}
module.exports = {
  generatePermutation: generatePermutation,
};
