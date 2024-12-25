// 生成一个随机的长整型数字
function random() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

// 计算 ((a + b) * (c - d) + (a * c - b * d)) % mod 的非负结果，方法1（基于大整数）
function f1(a, b, c, d, mod) {
  const BigIntMod = BigInt(mod);
  const o1 = BigInt(a); // a
  const o2 = BigInt(b); // b
  const o3 = BigInt(c); // c
  const o4 = BigInt(d); // d
  const o5 = o1 + o2; // a + b
  const o6 = o3 - o4; // c - d
  const o7 = o1 * o3; // a * c
  const o8 = o2 * o4; // b * d
  const o9 = o5 * o6; // (a + b) * (c - d)
  const o10 = o7 - o8; // (a * c - b * d)
  const o11 = o9 + o10; // ((a + b) * (c - d) + (a * c - b * d))
  const o12 = o11 % BigIntMod; // 最后取模

  return Number(o12 >= 0n ? o12 : o12 + BigIntMod);
}

// 计算 ((a + b) * (c - d) + (a * c - b * d)) % mod 的非负结果，方法2（基于模运算优化）
function f2(a, b, c, d, mod) {
  const BigIntMod = BigInt(mod);
  const o1 = BigInt(a) % BigIntMod; // a
  const o2 = BigInt(b) % BigIntMod; // b
  const o3 = BigInt(c) % BigIntMod; // c
  const o4 = BigInt(d) % BigIntMod; // d
  const o5 = (o1 + o2) % BigIntMod; // a + b
  const o6 = (o3 - o4 + BigIntMod) % BigIntMod; // c - d
  const o7 = (o1 * o3) % BigIntMod; // a * c
  const o8 = (o2 * o4) % BigIntMod; // b * d
  const o9 = (o5 * o6) % BigIntMod; // (a + b) * (c - d)
  const o10 = (o7 - o8 + BigIntMod) % BigIntMod; // (a * c - b * d)
  const ans = (o9 + o10) % BigIntMod; // ((a + b) * (c - d) + (a * c - b * d)) % mod
  return Number(ans);
}

// 测试主函数
function main() {
  console.log("测试开始");
  const testTime = 100000;
  const mod = 1000000007;
  for (let i = 0; i < testTime; i++) {
    const a = random();
    const b = random();
    const c = random();
    const d = random();
    if (f1(a, b, c, d, mod) !== f2(a, b, c, d, mod)) {
      console.log("出错了!");
      break;
    }
  }
  console.log("测试结束");

  console.log("===");
  const a = random();
  const b = random();
  const c = random();
  const d = random();
  console.log("a : " + a);
  console.log("b : " + b);
  console.log("c : " + c);
  console.log("d : " + d);
  console.log("===");
  console.log("f1 : " + f1(a, b, c, d, mod));
  console.log("f2 : " + f2(a, b, c, d, mod));
}

main();
