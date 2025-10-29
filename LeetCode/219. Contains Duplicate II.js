/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (map.has(x) && i - map.get(x) <= k) {
      return true;
    }
    map.set(x, i);
  }
  return false;
};
