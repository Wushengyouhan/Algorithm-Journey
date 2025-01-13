/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const n = s.length;
  // 只有5个元音字符，状态就5位 00000 ~ 11111
  const map = Array(32).fill(-2);
  // 全0状态在负1位置出现
  map[0] = -1;
  let ans = 0;

  for (let i = 0, status = 0; i < n; i++) {
    // status : 0....i-1字符串上，aeiou的奇偶性
    // s[i] = 当前字符
    // 情况1 : 当前字符不是元音，status不变
    // 情况2 : 当前字符是元音，a~u(0~4)，修改相应的状态
    let m = move(s[i]);

    if (m != -1) {
      status ^= 1 << m;
    }

    if (map[status] !== -2) {
      ans = Math.max(ans, i - map[status]);
    } else {
      map[status] = i;
    }
  }

  return ans;
};

function move(cha) {
  switch (cha) {
    case "a":
      return 0;
    case "e":
      return 1;
    case "i":
      return 2;
    case "o":
      return 3;
    case "u":
      return 4;
    default:
      return -1;
  }
}
