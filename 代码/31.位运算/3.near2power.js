//已知n是非负数
//返回大于等于n的最小的2某次方
//如果int范围内不存在这样的数，返回整数最小值
function near2power(n) {
  if (n <= 0) return 1;
  //为了防止正好是2的幂次
  n--;
  //把后面的位都刷成1
  n |= n >>> 1;
  n |= n >>> 2;
  n |= n >>> 4;
  n |= n >>> 8;
  n |= n >>> 16;

  return n + 1;
}

console.log(near2power(68));
