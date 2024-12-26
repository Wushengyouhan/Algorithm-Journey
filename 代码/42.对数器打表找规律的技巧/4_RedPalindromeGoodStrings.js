// 暴力方法
// 为了观察规律
function num1(n) {
  let path = new Array(n);
  return f(path, 0);
}

// 返回当前索引i开始的，满足条件的好串数量
function f(path, i) {
  if (i === path.length) {
    // 如果已经填充完所有位置（即 i 等于 path.length），开始检查是否符合条件
    let cnt = 0;
    for (let l = 0; l < path.length; l++) {
      for (let r = l + 1; r < path.length; r++) {
        if (is(path, l, r)) {
          cnt++;
        }
        // 如果有超过 1 个回文子串，则返回 0，表示不符合条件
        if (cnt > 1) {
          return 0;
        }
      }
    }
    return cnt === 1 ? 1 : 0;
  } else {
    let ans = 0;
    // 依次尝试三个位置，统计
    path[i] = "r";
    ans += f(path, i + 1);
    path[i] = "e";
    ans += f(path, i + 1);
    path[i] = "d";
    ans += f(path, i + 1);
    return ans;
  }
}

// s是字符串数组[l...r]，判断是否是回文
function is(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

// 打印找规律
function main() {
  console.log("主函数执行");

  for (let i = 1; i <= 10; i++) {
    console.log("长度为" + i + ", 答案:" + num1(i));
  }
}

main();

// 总结规律
function num2(n) {
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 3;
  }
  if (n == 3) {
    return 18;
  }

  return ((n + 1) * 6) % 1000000007;
}
