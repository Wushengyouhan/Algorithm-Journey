//获取一个数字在Base进制下的位数
const Base = 10;

var bits = function (number) {
  let ans = 0;
  while (number > 0) {
    number = Math.floor(number / Base);
    ans++;
  }
  return ans;
};

//test
console.log(bits(100));
