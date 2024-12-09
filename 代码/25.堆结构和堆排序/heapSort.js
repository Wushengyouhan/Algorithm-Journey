/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  heapSort(nums);
  return nums;
};

var heapSort = function (arr) {
  let n = arr.length;
  //自底建堆
  //注意size传的是n
  for (let i = n - 1; i >= 0; i--) {
    heapfiy(arr, i, n);
  }

  let size = n;
  while (size > 1) {
    [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
    size--;
    heapfiy(arr, 0, size);
  }
};

//向下调整
var heapfiy = function (arr, i, size) {
  let l = 2 * i + 1;
  while (l < size) {
    //较大孩子的下标
    let best = l + 1 < size && arr[l + 1] > arr[l] ? l + 1 : l;
    //再和自己比较
    best = arr[best] > arr[i] ? best : i;

    //自己就是最大的
    if (best === i) {
      break;
    }
    [arr[i], arr[best]] = [arr[best], arr[i]];
    //去较大的孩子那
    i = best;
    l = i * 2 + 1;
  }
};
