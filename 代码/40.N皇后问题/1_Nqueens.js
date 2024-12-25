/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  return f(0, new Array(n), n);
};

// i: 当前来到的行
// path: 0...i-1行的皇后，都摆在了哪些列
// n: 是几皇后问题
// 返回: 0...i-1行已经摆完了，i....n-1行可以去尝试的情况下还能找到几种有效的方法

function f(i, path, n) {
  if (i === n) {
    return 1;
  }

  let ans = 0;

  // 遍历当前列
  for (let j = 0; j < n; j++) {
    if (check(path, i, j)) {
      path[i] = j; // 将皇后放在第 i 行的第 j 列
      ans += f(i + 1, path, n); //继续处理下一行
    }
  }

  return ans;
}

// 检查当前在 i 行 j 列的位置是否冲突
// 0...i-1 行的皇后状况 path[0...i-1]
// 返回 true 表示不冲突，false 表示冲突

function check(path, i, j) {
  for (let k = 0; k < i; k++) {
    // 检查是否在同一列
    // 检查对角线
    if (path[k] === j || Math.abs(i - k) === Math.abs(j - path[k])) {
      return false;
    }
  }

  return true;
}
