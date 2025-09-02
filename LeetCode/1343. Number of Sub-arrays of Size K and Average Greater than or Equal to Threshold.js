/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // 1. 进
    sum += arr[i];

    if (i < k - 1) {
      continue;
    }

    // 2. 更新
    count += sum >= k * threshold ? 1 : 0;

    // 3. 出
    sum -= arr[i - k + 1];
  }

  return count;
};