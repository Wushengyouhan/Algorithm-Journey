function win1(n) {
  return f(n, "A");
}

// f函数：
// rest: 还剩多少草。
// cur: 当前选手的名字。
// 返回：还剩rest份草，当前选手是cur，按照题目规则，返回最终谁赢。

function f(rest, cur) {
  const enemy = cur === "A" ? "B" : "A";
  if (rest < 5) {
    return rest === 1 || rest === 3 || rest === 4 ? cur : enemy;
  }
  // rest >= 5
  // rest == 100
  // 依次尝试cur :
  // 1) 1 ->99,enemy ....
  // 2) 4 ->96,enemy ....
  // 3) 16 -> 84,enemy ....
  // 4) 64 -> 36,enemy ...
  // 没有cur赢的分支，enemy赢
  let pick = 1;
  while (pick <= rest) {
    if (f(rest - pick, enemy) === cur) {
      return cur;
    }

    pick *= 4;
  }

  return enemy;
}

// 打印找规律
function main() {
  for (let i = 0; i <= 50; i++) {
    console.log(`${i}: ${win1(i)}`);
  }
}

// 总结规律
function win2(n) {
  return n % 5 === 0 || n % 5 === 2 ? "B" : "A";
}

main();
