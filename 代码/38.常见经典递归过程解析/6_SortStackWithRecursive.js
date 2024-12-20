function sort(stack) {
  let depth = deep(stack);
  while (depth > 0) {
    let max = findMax(stack, depth);
    let count = countTimes(stack, depth, max);
    moveDown(stack, depth, max, count);
    depth -= count;
  }
}

// 返回栈的深度
// 不改变栈的数据状况
function deep(stack) {
  if (stack.length === 0) {
    return 0;
  }
  let num = stack.pop();
  let depth = deep(stack) + 1;
  stack.push(num);
  return depth;
}

// 从栈当前的顶部开始，往下数 depth 层
// 返回这 depth 层里的最大值
function findMax(stack, depth) {
  if (depth === 0) {
    return Number.MIN_SAFE_INTEGER;
  }
  let num = stack.pop();
  let restMax = findMax(stack, depth - 1);
  let max = Math.max(num, restMax);
  stack.push(num);
  return max;
}

// 从栈当前的顶部开始，往下数 depth 层，已知最大值是 max
// 返回 max 出现了几次，不改变栈的数据状况
function countTimes(stack, depth, max) {
  if (depth === 0) {
    return 0;
  }
  let num = stack.pop();
  let restTimes = countTimes(stack, depth - 1, max);
  let times = restTimes + (num === max ? 1 : 0);
  stack.push(num);
  return times;
}

// 从栈当前的顶部开始，往下数 depth 层，已知最大值是 max，出现了 k 次
// 请把这 k 个最大值沉底，剩下的数据状况不变
function moveDown(stack, depth, max, k) {
  if (depth === 0) {
    for (let i = 0; i < k; i++) {
      stack.push(max);
    }
  } else {
    let num = stack.pop();
    moveDown(stack, depth - 1, max, k);
    if (num !== max) {
      stack.push(num);
    }
  }
}

// 为了测试
// 生成随机栈
function randomStack(n, v) {
  let stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(Math.floor(Math.random() * v));
  }
  return stack;
}

// 为了测试
// 检测栈是不是从顶到底依次有序
function isSorted(stack) {
  let step = Number.MIN_SAFE_INTEGER;
  while (stack.length > 0) {
    if (step > stack[stack.length - 1]) {
      return false;
    }
    step = stack.pop();
  }
  return true;
}

// 为了测试
function main() {
  let test = [1, 5, 4, 5, 3, 2, 3, 1, 4, 2];
  sort(test);
  while (test.length > 0) {
    console.log(test.pop());
  }

  // 随机测试
  let N = 20;
  let V = 20;
  let testTimes = 20000;
  console.log("测试开始");
  for (let i = 0; i < testTimes; i++) {
    let n = Math.floor(Math.random() * N);
    let stack = randomStack(n, V);
    sort(stack);
    if (!isSorted(stack)) {
      console.error("出错了!");
      break;
    }
  }
  console.log("测试结束");
}

main();
