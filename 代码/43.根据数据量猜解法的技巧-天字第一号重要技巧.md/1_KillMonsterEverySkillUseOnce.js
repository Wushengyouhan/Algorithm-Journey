const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 技能最大个数
const MAXN = 11;
// 记录技能伤害
const kill = new Array(MAXN);
// 记录双倍伤害触发的血量
const blood = new Array(MAXN);

// 测试用例个数
let T;
// 用来记录当前处理到哪个用例
// 奇数接受n,m
// 偶数接收kill和blood
let currentTestCase = 0;
// 技能数和怪物血量
let n, m;
// 接收技能的索引
let skillIndex = 0;

// 处理输入
rl.on("line", (input) => {
  if (currentTestCase === 0) {
    // 第一行是测试用例的数量
    T = parseInt(input);
    currentTestCase++;
  } else if ((currentTestCase & 1) !== 0) {
    // 接收n，m
    [n, m] = input.split(" ").map(Number);
    currentTestCase++;
    // 新的case了,要重置技能数组
    skillIndex = 0;
  } else {
    // 保存伤害和触发双倍伤害的血量
    [kill[skillIndex], blood[skillIndex]] = input.split(" ").map(Number);
    skillIndex++;

    if (skillIndex === n) {
      // 当技能读取完毕时，开始计算并输出结果
      const ans = f(n, 0, m);
      console.log(ans === Number.MAX_VALUE ? -1 : ans);
      // 处理下一个case
      currentTestCase++;
    }
  }

  // 当所有测试用例处理完毕时关闭输入流
  if (currentTestCase > T * 2) {
    rl.close();
  }
});

// f(n, i, r) 用来计算最少的技能使用次数
// n : 一共几个技能
// i : 当前来到了第几号技能
// r : 怪兽目前的剩余血量
function f(n, i, r) {
  if (r <= 0) {
    // 之前的决策已经让怪兽挂了！返回使用了多少个技能
    // i 就代表已经使用的技能数
    return i;
  }

  if (i == n) {
    // 已经用了i个技能了，但怪物还有血
    return Number.MAX_VALUE;
  }

  // 返回至少需要几个技能可以将怪兽杀死
  let ans = Number.MAX_VALUE;

  // 全排列
  for (let j = i; j < n; j++) {
    // 依次把技能放到i位置尝试
    swap(i, j);
    // 判断当前技能是否能打出双倍伤害
    let damage = r > blood[i] ? kill[i] : kill[i] * 2;
    ans = Math.min(ans, f(n, i + 1, r - damage));
    // 千万别忘了要换回来
    swap(j, i);
  }

  return ans;
}

// i号技能和j号技能，参数交换
// j号技能要来到i位置，试一下
function swap(i, j) {
  [kill[i], kill[j]] = [kill[j], kill[i]];
  [blood[i], blood[j]] = [blood[j], blood[i]];
}
