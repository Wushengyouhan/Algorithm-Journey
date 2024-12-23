/**
 * @param {string} s
 * @return {string}
 */

let where;

var decodeString = function (s) {
  where = 0;
  return f(s.split(""), 0);
};

// s[i....]开始计算，遇到字符串终止 或者 遇到 ] 停止
// 返回 : 自己负责的这一段字符串的结果
// 返回之间，更新全局变量where，为了上游函数知道从哪继续！
function f(s, i) {
  let path = "";
  let cnt = 0;

  while (i < s.length && s[i] !== "]") {
    if (s[i] >= "a" && s[i] <= "z") {
      // 如果是字母，直接加入 path
      path += s[i++];
    } else if (s[i] >= "0" && s[i] <= "9") {
      // 遇见数字，统计倍数
      // i++不要漏了！
      cnt = cnt * 10 + (s[i++] - "0");
    } else {
      // 如果遇到 '['，开始递归解析
      path += get(cnt, f(s, i + 1));
      i = where + 1;
      // cnt置为0
      cnt = 0;
    }
  }
  // 更新全局变量，记录当前解析到的位置
  where = i;
  return path;
}

// 根据倍数 cnt 重复字符串 str
function get(cnt, str) {
  return str.repeat(cnt);
}
