/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  // 初始化一个 3*3 的 board
  const board = Array(3).fill().map(() => Array(3).fill(0));

  // 填数据
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    board[row][col] = i % 2 === 0 ? "X" : "O";
  }

  const winner = checkWinner(board);
  if (winner) return winner;
  return moves.length === 9 ? "Draw" : "Pending";
};

const checkWinner = (board) => {
  // 所有可能的胜利组合：8种情况
  const winCombos = [
    // 行
    [[0, 0], [0, 1], [0, 2]], // 第一行
    [[1, 0], [1, 1], [1, 2]], // 第二行
    [[2, 0], [2, 1], [2, 2]], // 第三行
    // 列
    [[0, 0], [1, 0], [2, 0]], // 第一列
    [[0, 1], [1, 1], [2, 1]], // 第二列
    [[0, 2], [1, 2], [2, 2]], // 第三列
    // 对角线
    [[0, 0], [1, 1], [2, 2]], // 主对角线
    [[0, 2], [1, 1], [2, 0]]  // 副对角线
  ];

  // 检查每一种获胜情况
  for (const combo of winCombos) {
    const [a, b, c] = combo;
    const val1 = board[a[0]][a[1]];
    const val2 = board[b[0]][b[1]];
    const val3 = board[c[0]][c[1]];

    if (val1 !== 0 && val1 === val2 && val2 === val3) {
      return val1 === "X" ? "A" : "B";
    }
  }

  return null;
};
