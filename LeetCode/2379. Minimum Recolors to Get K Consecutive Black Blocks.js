/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let op = Infinity;
  let whiteNums = 0;

  for (let i = 0; i < blocks.length; i++) {
    // 1. 进
    if (blocks[i] === 'W') {
      whiteNums++;
    }

    if (i < k - 1) {
      continue;
    }

    // 2. 更新
    op = Math.min(op, whiteNums);

    // 3. 出
    if (blocks[i - k + 1] === 'W') {
      whiteNums--;
    }
  }

  return op;
};