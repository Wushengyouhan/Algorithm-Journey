/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  const path = [];

  // ⭐ 物理防线：IP地址最少 4 位(如 1.1.1.1)，最多 12 位(如 255.255.255.255)
  if (s.length < 4 || s.length > 12) return res;

  // 辅助函数：质检员（⭐ 极致优化：绝不使用 substring，实现零内存拷贝）
  const isValid = function (start, end) {
    const len = end - start + 1;
    if (len > 3) return false; // 盾牌 1：超长拦截
    if (s[start] === '0' && len > 1) return false; // 盾牌 2：前导零拦截

    // 盾牌 3：抛弃 parseInt，直接在原字符串上用纯数学算数字
    let num = 0;
    for (let i = start; i <= end; i++) {
      num = num * 10 + Number(s[i]);
    }

    if (num > 255) return false; // 大小拦截
    return true;
  };

  const backtrack = function (startIndex) {
    // 1. 终止条件：装满 4 段了
    if (path.length === 4) {
      // 如果同时字符串也被吃光了，就是个完美 IP
      if (startIndex === s.length) {
        res.push(path.join('.'));
      }
      return;
    }

    // 2. 单层循环逻辑
    for (let i = startIndex; i < s.length; i++) {
      // 呼叫零拷贝质检员
      if (isValid(startIndex, i)) {
        // 只有完全通过了最严苛的质检，才允许真正切一刀 (substring) 吞进肚子里
        path.push(s.substring(startIndex, i + 1));
        backtrack(i + 1);
        path.pop(); // 回溯吐出
      } else {
        // 🚨 核心剪枝：如果切出的短肉不合法，那加长后必定更加不合法！直接斩断树枝
        break;
      }
    }
  };

  backtrack(0);
  return res;
};
