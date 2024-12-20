function hanoi(n) {
  f(n, "左", "右", "中");
}

// i个盘子，从from移到to，借助other
function f(i, from, to, other) {
  if (i === 1) {
    console.log(`移动圆盘 1 从 ${from} 到 ${to}`);
  } else {
    f(i - 1, from, other, to);
    console.log(`移动圆盘 ${i} 从 ${from} 到 ${to}`);
    f(i - 1, other, to, from);
  }
}

hanoi(3);
