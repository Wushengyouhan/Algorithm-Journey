var similarPairs = function (words) {
  const cnt = new Map();
  let ans = 0;
  for (const s of words) {
    let mask = 0;
    for (const c of s) {
      mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
    }
    const c = cnt.get(mask) || 0;
    ans += c;
    cnt.set(mask, c + 1);
  }
  return ans;
};
