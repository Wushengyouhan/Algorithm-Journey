/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

var quickSort = function (arr, l, r) {
  //只有一个数或者区间不存在
  if (l >= r) return;

  //[l...r]随机取一个位置上的数
  let x = arr[l + Math.floor(Math.random() * (r - l + 1))];
  //用这个数划分,mid是这个数的位置
  let mid = partition(arr, l, r, x);

  //分别对左右排序
  quickSort(arr, l, mid - 1);
  quickSort(arr, mid + 1, r);
};

var partition = function (arr, l, r, x) {
  //a是分界点
  //[l,..a-1]都是<=x
  let a = l;
  //记录值为x的位置，最后需要把它换到末尾
  let xi = 0;

  //i对区间进行遍历
  //<=x，，交换位置上的数，然后a和i一起前进
  //>x，只有i前进
  for (let i = l; i <= r; i++) {
    if (arr[i] <= x) {
      swap(arr, a, i);
      if (arr[a] === x) {
        xi = a;
      }
      a++;
    }
  }

  swap(arr, xi, a - 1);
  return a - 1;
};

var swap = function (arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
};
