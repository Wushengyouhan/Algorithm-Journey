// 交换数组中i和j位置的数
const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// 选择排序
const selectionSort = (arr) => {
  //若果数组为空或者只有一个元素，它本身就是有序的
  if (!arr || arr.length < 2) {
      return;
  }
  for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      swap(arr, i, minIndex);
  }
}

//冒泡排序一句话：0~i范围上，相邻位置较大的数滚下去，最大值最终来到i位置，然后0~i-1范围上继续
const bubbleSort = (arr) => {
  if (!arr || arr.length < 2) {
      return;
  }
  for (let end = arr.length - 1; end > 0; end--) {
      for (let i = 0; i < end; i++) {
          if (arr[i] > arr[i + 1]) {
              swap(arr, i, i + 1);
          }
      }
  }
}

//插入排序一句话：0~i范围上已经有序，新来的数从右到左滑到不再小的位置插入，然后继续
const insertionSort = (arr) => {
  if (!arr || arr.length < 2) {
    return;
  }

  //从第一张牌开始摸
  for (let i = 1; i < arr.length; i++) {
    //j+1用远表示当前插入的数
    //一直和前面比较，如果比前面小，就和前面的值交换
    //终止条件: 比到0位置或者当前值比前面一个值大了，因为前面都是有序的，所以就跳出循环
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
       swap(arr, j, j+1)
    }
  }
}



let arr = [3,4,5,1,2]



// selectionSort(arr)
// bubbleSort(arr)
insertionSort(arr)
console.log(arr)

//导出函数
module.exports = { selectionSort, bubbleSort, insertionSort };