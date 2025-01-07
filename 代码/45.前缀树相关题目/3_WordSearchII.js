/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// 前缀树全局变量
const MAXN = 10001;
const tree = Array(MAXN)
  .fill(null)
  .map(() => Array(26).fill(0));
const pass = new Array(MAXN).fill(0);
const end = new Array(MAXN).fill(null);
let cnt = 1;

var findWords = function (board, words) {
  build(words);
  const ans = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, 1, ans);
    }
  }
  clear();
  return ans;
};

// board : 二维网格
// i,j : 此时来到的格子位置，i行、j列
// t : 前缀树节点的编号, 相当于cur
// ans : 收集到了哪些字符串，都放入ans
// 返回值 : 收集到了几个字符串
function dfs(board, i, j, t, ans) {
  // 越界 或者 走了回头路，直接返回0
  if (
    i < 0 ||
    i === board.length ||
    j < 0 ||
    j === board[0].length ||
    board[i][j] === 0
  ) {
    return 0;
  }

  // 不越界 且 不是回头路
  // 用tmp记录当前字符
  const tmp = board[i][j];
  // 路径编号
  const road = tmp.charCodeAt(0) - "a".charCodeAt(0);
  t = tree[t][road];

  if (pass[t] === 0) {
    return 0;
  }

  // fix ：从当前i，j位置出发，一共收集到了几个字符串
  let fix = 0;
  // 该位置的就是一个目标单词
  if (end[t] !== null) {
    fix++;
    ans.push(end[t]);
    // 防止重复加入
    end[t] = null;
  }

  // 标记已访问
  board[i][j] = 0;
  // 四个方向的结果
  fix += dfs(board, i - 1, j, t, ans);
  fix += dfs(board, i + 1, j, t, ans);
  fix += dfs(board, i, j - 1, t, ans);
  fix += dfs(board, i, j + 1, t, ans);

  pass[t] -= fix;
  //恢复标记
  board[i][j] = tmp;

  return fix;
}

// 建树并且插入
function build(words) {
  cnt = 1;

  for (const word of words) {
    let cur = 1;
    pass[cur]++;

    for (let i = 0; i < word.length; i++) {
      const path = word[i].charCodeAt(0) - "a".charCodeAt(0);
      if (tree[cur][path] === 0) {
        tree[cur][path] = ++cnt;
      }
      cur = tree[cur][path];
      pass[cur]++;
    }

    end[cur] = word;
  }
}

function clear() {
  for (let i = 1; i <= cnt; i++) {
    tree[i].fill(0);
    pass[i] = 0;
    end[i] = null;
  }
}
