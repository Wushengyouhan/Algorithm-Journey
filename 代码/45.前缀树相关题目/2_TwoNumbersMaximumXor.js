/**
 * @param {number[]} nums
 * @return {number}
 */

// 准备这么多静态空间就够了，实验出来的
// 如果测试数据升级了规模，就改大这个值
const MAXN = 3000001;

const tree = Array(MAXN)
  .fill(null)
  .map(() => Array(2).fill(0));

// 前缀树目前使用了多少空间
let cnt;

// 数字只需要从哪一位开始考虑
let high;

var findMaximumXOR = function (nums) {
  build(nums);
  let ans = 0;
  for (const num of nums) {
    ans = Math.max(ans, maxXor(num));
  }

  clear();
  return ans;
};

// 计算一个数字与前缀树中其他数字的最大异或值
function maxXor(num) {
  let ans = 0;
  let cur = 1;
  for (let i = high; i >= 0; i--) {
    // 当前位的值（0或1
    const status = (num >> i) & 1;
    // 希望的目标位（异或结果为1的目标）
    let want = status ^ 1;
    // 如果目标路径不存在，选择当前位相同的路径，want = status
    if (tree[cur][want] === 0) {
      want ^= 1;
    }
    ans |= (status ^ want) << i;
    cur = tree[cur][want];
  }
  return ans;
}

function build(nums) {
  cnt = 1;
  let max = Math.max(...nums);
  // 计算最大值的二进制表示的最高有效位数
  // 可以忽略这些前置的0，从high位开始考虑
  high = 31 - Math.clz32(max);
  for (const num of nums) {
    insert(num);
  }
}

function insert(num) {
  let cur = 1;
  for (let i = high; i >= 0; i--) {
    const path = (num >> i) & 1; // 取出当前位的值（0或1）
    // 如果当前路径不存在，创建新节点
    if (tree[cur][path] === 0) {
      tree[cur][path] = ++cnt;
    }
    cur = tree[cur][path];
  }
}

function clear() {
  for (let i = 1; i <= cnt; i++) {
    tree[i][0] = tree[i][1] = 0;
  }
}
