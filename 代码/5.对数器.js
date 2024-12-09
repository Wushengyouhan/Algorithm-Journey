const { selectionSort, bubbleSort, insertionSort } = require('./4选择冒泡插入排序');
//验证器
//数组的最大长度
let N = 200;
//随机元素的值, 在1～V之间
let V = 1000;
//测试次数
let testTime = 50000;
console.log('测试开始');
for (let i = 0; i < testTime; i++) {
  //随机得到一个长度 [0 ~ n-1]
  let n = Math.floor(Math.random() * N);
  //得到随机数组
  let arr = randomArray(n, V);
  let arr1 = arr.slice();
  let arr2 = arr.slice();
  let arr3 = arr.slice();

  //分别验证比较结果
  selectionSort(arr1);
  bubbleSort(arr2);
  insertionSort(arr3);

  if (!sameArray(arr1, arr2) || !sameArray(arr1, arr3)) {
    console.log("出错了！");
    // 当有错了
    // 打印是什么例子，出错的
    // 打印三个功能，各自排序成了什么样
    // 可能要把例子带入，每个方法，去debug！

  }
}

console.log('测试结束');



//随机数组生成
//长度为n
//数组里的每个数都在1~v之间
function randomArray(n, v){
  let arr = [];
  for (let i = 0; i < n; i++) {
    //所有元素都是 1～v之 间的整数
    arr[i] = Math.floor((Math.random() * v)) + 1
  }
  return arr;
}

//为了验证
function sameArray(arr1, arr2){
  let n = arr1.length;
  for (let i = 0; i < n; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}





