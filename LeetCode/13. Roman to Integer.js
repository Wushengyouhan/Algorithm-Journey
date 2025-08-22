/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    // 最多到倒数第二位
    // 如果当前值小于下一个值，则减去当前值
    if (i < s.length - 1 && map.get(s[i]) < map.get(s[i + 1])) {
      ans -= map.get(s[i]);
    } else {
      ans += map.get(s[i]);
    }
  }

  return ans;
};
