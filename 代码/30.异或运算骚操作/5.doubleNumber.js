/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let eor1 = 0;
  for (let num of nums) {
    eor1 ^= num;
  }

  //eor1 = a ^ b
  // Brian Kernighan算法
  // 提取出二进制里最右侧的1
  let rightOne = eor1 & -eor1;
  let eora = 0;
  for (let num of nums) {
    //a的那批数字，该位上都是0
    if ((num & rightOne) === 0) {
      eora ^= num;
    }
  }

  return [eora, eora ^ eor1];
};
