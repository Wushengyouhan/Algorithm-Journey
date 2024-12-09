// 不用任何判断语句和比较操作，返回两个数的最大值
// 测试链接 : https://www.nowcoder.com/practice/d2707eaf98124f1e8f1d9c18ad487f76

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 获取最大值
 * @param a int整型
 * @param b int整型
 * @return int整型
 */
function getMax(a, b) {
  let c = a - b;
  //下面有一个为0一个为1
  //c非负, returnA -> 1;returnB -> 0
  let returnA = sign(c);
  let returnB = flip(returnA);
  return a * returnA + b * returnB;
}

//单上面a-b可能会溢出
function getMax2(a, b) {
  //a与b符号一样，通过c来判断
  //a与b符号不一样,就直接用自己的符号

  let c = a - b;
  let diffAB = sign(a) ^ sign(b);
  let sameAB = flip(diffAB);
  //a,b不一样
  //sameAB * sign(c)
  //a为正,returnA就为1，为负，就是0
  let returnA = diffAB * sign(a) + sameAB * sign(c);
  let returnB = flip(returnA);
  return a * returnA + b * returnB;
}

//n是0或1
//功能:把1变成0，把0变成1
function flip(n) {
  return n ^ 1;
}

function sign(n) {
  //先获取最高位是，负数是1，正数是0
  //再反转，负数变为0，正数变为1
  return flip(n >>> 31);
}

module.exports = {
  getMax: getMax,
};
