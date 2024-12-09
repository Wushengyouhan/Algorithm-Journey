//求32位有符号整数里3的最大幂
function maxPowerOfThreeIn32Bit() {
  let power = 1; // 初始值为 3^0 = 1
  const MAX = Math.pow(2, 31) - 1; // 32 位有符号整数最大值 2147483647
  while (power * 3 <= MAX) {
    power *= 3; // 不断乘以 3
  }
  return power;
}
console.log(maxPowerOfThreeIn32Bit());
