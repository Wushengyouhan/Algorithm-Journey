/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  // 辅助函数：DFS 深度优先搜索
  // i, j 表示当前坐标，k 表示当前正在找 word 的第几个字母
  const dfs = function (i, j, k) {
    // 1. 递归终止条件（越界，或者字母对不上）
    // 注意：因为我们用 '*' 标记走过的格子，所以如果走回头路，这里也会自动因为字母不匹配而 return false
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
      return false;
    }

    // 2. 如果走到这里，说明字母对上了！看看是不是找全了？
    if (k === word.length - 1) {
      return true;
    }

    // 3. 核心：打标记（保护现场，防止当前路径重复走）
    const temp = board[i][j];
    board[i][j] = '*';

    // 4. 向上下左右四个方向蔓延
    // 只要有一个方向能走通（返回 true），当前这一步就是对的
    const res =
      dfs(i + 1, j, k + 1) || // 下
      dfs(i - 1, j, k + 1) || // 上
      dfs(i, j + 1, k + 1) || // 右
      dfs(i, j - 1, k + 1); // 左

    // 5. 核心：恢复现场（回溯）
    // 不管上面的蔓延是成功还是失败，退回的时候一定要把原来的字母还回去！
    board[i][j] = temp;

    return res;
  };

  // 双层循环遍历网格，找到每一个可能的起点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果第一个字母对上了，才开启 DFS
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }

  return false;
};
