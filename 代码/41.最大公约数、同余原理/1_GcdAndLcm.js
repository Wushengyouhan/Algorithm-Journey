// 最大公约数
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// 最小公倍数
function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

// test
console.log(gcd(48, 18)); // 输出 6
console.log(lcm(48, 18)); // 输出 144
