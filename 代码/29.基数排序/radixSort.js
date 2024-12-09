/**
 * @param {number[]} nums
 * @return {number[]}
 */
const BASE = 10;
const MAXN = 50001;
const cnts = new Array(BASE).fill(0);
const help = new Array(MAXN);
var sortArray = function (nums) {
  let n = nums.length;
  if (n > 1) {
    let min = nums[0];
    for (let i = 1; i < n; i++) {
      min = Math.min(min, nums[i]);
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
      // 数组中的每个数字，减去数组中的最小值，就把数组转成了非负数组
      nums[i] -= min;
      //记录最大值
      max = Math.max(max, nums[i]);
    }

    radixSort(nums, n, bits(max));

    //还原数组
    for (let i = 0; i < n; i++) {
      nums[i] += min;
    }
  }

  return nums;
};

//获取数字位数
function bits(num) {
  let ans = 0;
  while (num > 0) {
    num = Math.floor(num / BASE);
    ans++;
  }
  return ans;
}

//基数排序
function radixSort(arr, n, bits) {
  for (let offset = 1; bits > 0; offset *= BASE, bits--) {
    cnts.fill(0); // 重置计数数组
    for (let i = 0; i < n; i++) {
      //统计每个数字的个数
      cnts[Math.floor(arr[i] / offset) % BASE]++;
    }

    //处理成前缀次数累加的形式
    for (let i = 1; i < BASE; i++) {
      cnts[i] = cnts[i] + cnts[i - 1];
    }

    //从后往前遍历，保证稳定性
    for (let i = n - 1; i >= 0; i--) {
      help[--cnts[Math.floor(arr[i] / offset) % BASE]] = arr[i];
    }

    //将该位排好序的数组写回arr
    for (let i = 0; i < n; i++) {
      arr[i] = help[i];
    }
  }
}
