/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 1. 初始化 n x n 的空矩阵
  // 注意：不能用 new Array(n).fill([])，会有引用问题
  const matrix = Array.from({ length: n }, () => new Array(n));

  // 2. 定义四面墙的初始位置
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  // 3. 准备开始填数
  let num = 1; // 当前要填入的数字
  const target = n * n; // 最大要填入的数字

  // 4. 开始螺旋模拟
  while (num <= target) {
    // ① 从左到右 (贴着 top 行走)
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++; // 上墙下压

    // ② 从上到下 (贴着 right 列走)
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--; // 右墙左压

    // ③ 从右到左 (贴着 bottom 行走)
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--; // 下墙上压

    // ④ 从下到上 (贴着 left 列走)
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++; // 左墙右压
  }

  return matrix;
};
