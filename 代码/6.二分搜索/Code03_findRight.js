//有序数组中找<=num的最右位置
function findRight(arr, num) {
  let ans = -1;
  let l = 0;
  let r = arr.length - 1;
  let mid = 0;
  while(l <= r) {
    mid = Math.floor((l + r) / 2)
    if ( arr[mid] <= num) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return ans
}

let a = findRight([1,2,4,8,10], 9)
console.log(a);
