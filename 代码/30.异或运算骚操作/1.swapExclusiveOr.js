//异或交换两个数
let a = -2323;
let b = 10;
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a: ", a);
console.log("b: ", b);

let arr = [3, 5];
swap(arr, 0, 1);
console.log("不同位置:", arr);
swap(arr, 0, 0);
console.log("相同位置:", arr);

//交换i，j位置上的数
// 当i!=j，没问题，会完成交换功能
// 当i==j，会出错
// 所以知道这种写法即可，并不推荐
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
