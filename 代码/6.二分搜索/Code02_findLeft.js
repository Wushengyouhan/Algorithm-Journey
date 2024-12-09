//有序数组中找>=num的最左位置
function findLeft(arr, num) {
  let ans = -1;
  let l = 0;
  let r = arr.length - 1;
  let mid = 0;
  while(l <= r) {
    mid = Math.floor((l + r) / 2)
    if ( arr[mid] >= num) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return ans
}

let a = findLeft([1,2,4,8,10], 3)
console.log(a);
