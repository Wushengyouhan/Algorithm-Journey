/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length > 1) {
    mergeSort(nums);
  }

  return nums;
};

var mergeSort = (arr) => {
  sort(arr, 0, arr.length - 1);
};

const help = [];

var sort = (arr, l, r) => {
  //最小case
  if (l === r) return;
  let m = Math.floor((l + r) / 2);
  sort(arr, l, m);
  sort(arr, m + 1, r);
  merge(arr, l, m, r);
};

var merge = (arr, l, m, r) => {
  //指向左右部分的起始位置
  let a = l;
  let b = m + 1;

  let i = l;
  while (a <= m && b <= r) {
    help[i++] = arr[a] < arr[b] ? arr[a++] : arr[b++];
  }

  //一个部分的数据拿完了，将剩余部分的数据全插入help后面
  while (a <= m) {
    help[i++] = arr[a++];
  }

  while (b <= r) {
    help[i++] = arr[b++];
  }

  //将排序好的数组赋值回去
  for (i = l; i <= r; i++) {
    arr[i] = help[i];
  }
};
