/**
 * @param {string} formula
 * @return {string}
 */
let where;
var countOfAtoms = function (formula) {
  where = 0;
  let map = f(formula.split(""), 0);
  let result = [];

  // js的map是插入序，所以要按对key进行排序
  let sortedKeys = [...map.keys()].sort();

  for (let key of sortedKeys) {
    result.push(key);
    let count = map.get(key);
    if (count > 1) {
      result.push(count);
    }
  }

  return result.join("");
};

// s[i....]开始计算，遇到字符串终止 或者 遇到 ) 停止
// 返回 : 自己负责的这一段字符串的结果，有序表！
// 返回之间，更新全局变量where，为了上游函数知道从哪继续！
function f(s, i) {
  let ans = new Map(); // 存储当前部分的结果
  let name = []; // 用于存储当前正在解析的化学元素名
  let pre = null; // 存储嵌套括号解析的结果
  let cnt = 0; // 当前元素或括号组的倍数

  while (i < s.length && s[i] !== ")") {
    // 遇见 大写字母 或者 左括号 就结算前面的
    if ((s[i] >= "A" && s[i] <= "Z") || s[i] === "(") {
      // 历史记录结算
      fill(ans, name, pre, cnt);
      pre = null;
      name = [];
      cnt = 0;

      // 处理当前
      if (s[i] >= "A" && s[i] <= "Z") {
        name.push(s[i++]);
      } else {
        // 遇到 '('，递归解析括号内部
        pre = f(s, i + 1);
        i = where + 1;
      }
    } else if (s[i] >= "a" && s[i] <= "z") {
      // 遇见小写字母
      name.push(s[i++]);
    } else {
      // 遇见数字
      cnt = cnt * 10 + (s[i++] - "0");
    }
  }
  // 遇到终止，把最后一个加进来
  fill(ans, name, pre, cnt);
  // 更新全局变量
  where = i;
  return ans;
}

// 将当前元素或括号组的解析结果填充到总表中
function fill(ans, name, pre, cnt) {
  if (name.length > 0 || pre != null) {
    // 如果没有明确倍数，默认为 1  e.g. Na(OH)
    cnt = cnt === 0 ? 1 : cnt;
    if (name.length > 0) {
      let key = name.join("");
      ans.set(key, (ans.get(key) || 0) + cnt);
    } else {
      // 之前的历史记录是一个表 (SO3)2
      for (let [key, value] of pre) {
        ans.set(key, (ans.get(key) || 0) + value * cnt);
      }
    }
  }
}
