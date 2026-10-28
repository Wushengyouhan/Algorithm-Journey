/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function (array) {
  if (!array || array.length === 0 || array[0].length === 0) return [];

  const res = [];

  // 初始化四面墙壁
  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;

  // 死循环，依靠内部的越界检测来 break
  while (true) {
    // 1. 向右移动（贴着 top 墙，从 left 走到 right）
    for (let i = left; i <= right; i++) {
      res.push(array[top][i]);
    }
    // 最上面一层已被剥离，top 墙下压。如果 top 超过了 bottom，说明榨干了，直接结束
    if (++top > bottom) break;

    // 2. 向下移动（贴着 right 墙，从 top 走到 bottom）
    for (let i = top; i <= bottom; i++) {
      res.push(array[i][right]);
    }
    // 最右侧一层已被剥离，right 墙左压
    if (--right < left) break;

    // 3. 向左移动（贴着 bottom 墙，从 right 走到 left）
    for (let i = right; i >= left; i--) {
      res.push(array[bottom][i]);
    }
    // 最下面一层已被剥离，bottom 墙上压
    if (--bottom < top) break;

    // 4. 向上移动（贴着 left 墙，从 bottom 走到 top）
    for (let i = bottom; i >= top; i--) {
      res.push(array[i][left]);
    }
    // 最左侧一层已被剥离，left 墙右压
    if (++left > right) break;
  }

  return res;
};
