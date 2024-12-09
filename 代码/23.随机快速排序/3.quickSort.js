/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

var quickSort = function (arr, l, r) {
  //只有1个数或边界不存在
  if (l >= r) return;
  //随机取区间内的一个数
  let x = arr[l + Math.floor(Math.random() * (r - l + 1))];
  let [a, b] = partition(arr, l, r, x);
  quickSort(arr, l, a - 1);
  quickSort(arr, b + 1, r);
};

var partition = function (arr, l, r, x) {
  //a是左分界线
  let a = l;
  //b是右分界线
  let b = r;
  let i = l;

  //[a,b]之间都是x
  while (i <= b) {
    if (arr[i] < x) {
      [arr[i], arr[a]] = [arr[a], arr[i]];
      a++;
      i++;
    } else if (arr[i] > x) {
      [arr[i], arr[b]] = [arr[b], arr[i]];
      b--;
    } else {
      i++;
    }
  }
  return [a, b];
};
