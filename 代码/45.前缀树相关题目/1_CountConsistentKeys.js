/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param b int整型二维数组
 * @param a int整型二维数组
 * @return int整型一维数组
 */
const MAXN = 2000001;
const tree = Array(MAXN)
  .fill(null)
  .map(() => Array(12).fill(0));

const pass = Array(MAXN).fill(0);
let cnt;

function build() {
  cnt = 1;
}

// '0' ~ '9' 10个 0~9
// '#' 10
// '-' 11
function path(char) {
  if (char === "#") {
    return 10;
  } else if (char === "-") {
    return 11;
  } else {
    return char.charCodeAt(0) - "0".charCodeAt(0);
  }
}

function insert(word) {
  let cur = 1;
  pass[cur]++;
  for (let i = 0; i < word.length; i++) {
    const p = path(word[i]);
    if (tree[cur][p] === 0) {
      // 新建节点
      tree[cur][p] = ++cnt;
    }
    cur = tree[cur][p];
    pass[cur]++;
  }
}

function count(pre) {
  let cur = 1;
  for (let i = 0; i < pre.length; i++) {
    const p = path(pre[i]);
    if (tree[cur][p] === 0) {
      return 0;
    }
    cur = tree[cur][p];
  }
  return pass[cur];
}

function clear() {
  for (let i = 1; i <= cnt; i++) {
    tree[i].fill(0);
    pass[i] = 0;
  }
}

function countConsistentKeys(b, a) {
  build();
  let builder = [];
  // [3,6,50,10] -> "3#44#-40#"
  for (const nums of a) {
    builder = [];
    for (let i = 1; i < nums.length; i++) {
      builder.push((nums[i] - nums[i - 1]).toString() + "#");
    }
    insert(builder.join(""));
  }

  const ans = Array(b.length).fill(0);
  for (let i = 0; i < b.length; i++) {
    builder = [];
    const nums = b[i];
    for (let j = 1; j < nums.length; j++) {
      builder.push((nums[j] - nums[j - 1]).toString() + "#");
    }
    ans[i] = count(builder.join(""));
  }
  clear();
  return ans;
}

module.exports = {
  countConsistentKeys: countConsistentKeys,
};
