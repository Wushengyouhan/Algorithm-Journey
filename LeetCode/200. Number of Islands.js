/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 题目 Constraints 保证了 1 <= m, n <= 300，无需判空
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  // 辅助函数：深度优先搜索，用于“沉岛”
  const dfs = function (i, j) {
    // 1. 递归终止条件：越界，或者遇到了水 ('0')
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
      return;
    }

    // 2. 沉岛操作：把走过的陆地变成水，一劳永逸
    grid[i][j] = '0';

    // 3. 上下左右四面八方继续蔓延沉岛
    dfs(i + 1, j); // 下
    dfs(i - 1, j); // 上
    dfs(i, j + 1); // 右
    dfs(i, j - 1); // 左
  };

  // 雷达扫描整个地图
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 只要发现一块没见过的陆地，必定是一个新岛屿的冰山一角
      if (grid[i][j] === '1') {
        count++; // 岛屿数 + 1
        dfs(i, j); // 召唤 DFS 把整座岛沉没
      }
    }
  }

  return count;
};

numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]);
