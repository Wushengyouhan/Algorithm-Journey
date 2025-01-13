const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let aim;
let data;
let lineCount = 0;
rl.on("line", (input) => {
  if (lineCount === 0) {
    [n, aim] = input.split(" ").map(Number);
    lineCount++;
  } else {
    data = input.split(" ").map(Number);
    // 输入读取完毕
    rl.close();
    lineCount = 0;
  }
});

rl.on("close", () => {
  let result = compute();
  console.log(result);
});

function compute() {
  // 前缀和的字典，只记录最早出现的和
  const map = new Map();
  // 重要 : 0这个前缀和，一个数字也没有的时候，就存在了
  map.set(0, -1);
  // 最长子数组长度
  let ans = 0;
  // 依次找以i位置结尾，存不在这样的子数组
  for (let i = 0, sum = 0; i < n; i++) {
    sum += data[i];

    // 到i位置总共是sum
    // 去找前面存不存在 sum - aim 这样的前缀和
    // 找到就是以i位置结尾最远的地方
    if (map.has(sum - aim)) {
      ans = Math.max(ans, i - map.get(sum - aim));
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return ans;
}
