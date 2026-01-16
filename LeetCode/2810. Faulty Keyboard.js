var finalString = function (s) {
  // 两个数组背靠背： q[0] <--- 起点 ---> q[1]
  const q = [[], []];
  let dir = 1; // 1 代表向右(q[1])，0 代表向左(q[0])

  for (const c of s) {
    if (c === 'i') {
      // 遇到 i，切换方向 (0变1，1变0)
      dir ^= 1;
    } else {
      // 无论哪个方向，都只用 push (效率最高)
      q[dir].push(c);
    }
  }

  // 拼接逻辑：
  // 另一方向(历史数据，被反转过) + 当前方向(当前数据，顺序正常)
  return q[dir ^ 1].reverse().concat(q[dir]).join('');
};
