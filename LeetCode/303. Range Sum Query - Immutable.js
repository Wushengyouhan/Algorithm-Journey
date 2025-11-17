class NumArray {
  constructor(nums) {
    // sum是前i个位置的和
    this.sum = Array(nums.length + 1);
    this.sum[0] = 0;
    for (let i = 0; i < nums.length; i++) {
      this.sum[i + 1] = this.sum[i] + nums[i];
    }
  }

  sumRange(left, right) {
    // 注意这里是right+1
    return this.sum[right + 1] - this.sum[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
