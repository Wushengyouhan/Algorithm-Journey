/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  return counts(nums, 0, nums.length - 1)
};

const help = []

var counts = function (arr, l, r) {
  if (l === r) {
      return 0
  }

  // 相当于除以2取整
  let m = (l + r) >> 1

  return counts(arr, l, m) + counts(arr, m + 1, r) + merge(arr, l, m, r)
}

var merge = function (arr, l, m, r) {
  //统计部分
  let ans = 0
  for (let i = l, j = m + 1; i <= m; i++) {
      while (j<=r && arr[i] > arr[j] * 2) {
          j++
      }
      ans += j - (m + 1)
  }

      //排序部分
      let a = l
  let b = m + 1
  let i = l

  while (a <= m && b <= r) {
      help[i++] = arr[a] < arr[b] ? arr[a++] : arr[b++]
  }

  while (a <= m) {
      help[i++] = arr[a++]
  }

  while (b <= r) {
      help[i++] = arr[b++]
  }

  for (let i = l; i <= r; i++) {
      arr[i] = help[i]
  }

  return ans
}

