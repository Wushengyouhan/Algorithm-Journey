/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  // 构造升序表
  this.pos = {};
  for (let i = 0; i < arr.length; i++) {
    if (this.pos[arr[i]] === undefined) {
      this.pos[arr[i]] = [];
    }
    this.pos[arr[i]].push(i);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  const nums = this.pos[value];
  if (nums === undefined) return 0;
  // >= left
  const p = lowerBound(nums, left);
  // > right 等价于 >= right+1
  const q = lowerBound(nums, right + 1);
  return q - p;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

var lowerBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
