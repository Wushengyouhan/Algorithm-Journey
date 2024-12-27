/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
  const l = BigInt(left);
  const r = BigInt(right);
  // √r 的整数部分
  const limit = BigInt(Math.floor(Math.sqrt(Number(r))));
  // 种子
  let seed = 1n;
  // 当前生成的回文数
  let num = 0n;
  // 计数
  let ans = 0;

  // 这里检查的num一定要是生成的奇数长度num，因为它更短一点
  while (num < limit) {
    // 生成偶数长度的回文数字
    num = evenEnlarge(seed);
    if (check(num * num, l, r)) {
      ans++;
    }

    // 生成奇数长度的回文数字
    num = oddEnlarge(seed);
    if (check(num * num, l, r)) {
      ans++;
    }
    // 千万别忘了seed增大，不然死循环
    seed++;
  }

  return ans;
};

// 根据种子生成偶数长度的回文数
function evenEnlarge(seed) {
  // 123 => 123321
  let ans = seed;
  while (seed !== 0n) {
    ans = ans * 10n + (seed % 10n);
    seed = seed / 10n;
  }
  return ans;
}

// 根据种子生成奇数长度的回文数
function oddEnlarge(seed) {
  // 123 => 12321
  let ans = seed;
  seed = seed / 10n;
  while (seed !== 0n) {
    ans = ans * 10n + (seed % 10n);
    seed = seed / 10n;
  }
  return ans;
}

// 检查是否在范围 [l, r] 内且是回文数
function check(ans, l, r) {
  return l <= ans && ans <= r && isPalindrome(ans);
}

// 回文数判断
function isPalindrome(x) {
  let offset = 1n;
  // 得到和x位数一样的offset
  // 121
  // 100
  while (x / offset >= 10n) {
    offset *= 10n;
  }

  // 首尾判断
  while (x !== 0n) {
    if (x / offset !== x % 10n) {
      return false;
    }

    // 掐头去尾
    // 121
    // 2
    x = (x % offset) / 10n;
    offset = offset / 100n;
  }

  return true;
}
