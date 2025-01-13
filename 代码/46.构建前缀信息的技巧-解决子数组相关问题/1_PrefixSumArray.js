class NumArray {
  constructor(nums) {
    this.sum = Array(nums.length + 1);
    // 加一个0，方便处理特殊情况
    this.sum[0] = 0;
    for (let i = 1; i <= nums.length; i++) {
      this.sum[i] = this.sum[i - 1] + nums[i - 1];
    }
  }

  sumRange(left, right) {
    // 注意这里到right的和是right+1
    return this.sum[right + 1] - this.sum[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
