//二分查找
function findNumber(arr, num) {
  if (arr == null || arr.length === 0) {
    return false;
  }
  
  let l = 0;
  let r = arr.length - 1;
  let m = 0;
  
  while (l <= r) {
    m = Math.floor((l + r) / 2); // 取中间值时确保为整数

    if (arr[m] === num) {
      return true;  // 找到目标值
    } else if (arr[m] > num) {
      r = m - 1;  // 缩小到左半边
    } else {
      l = m + 1;  // 缩小到右半边
    }
  }
  
  return false;  // 未找到目标值
}

let a = findNumber([1,2,4,5], 9)
console.log(a);
