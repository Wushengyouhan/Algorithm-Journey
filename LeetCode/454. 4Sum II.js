/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  let count = 0;
  for (let a of nums1) {
    for (let b of nums2) {
      let sumAB = a + b;
      map.set(sumAB, (map.get(sumAB) || 0) + 1);
    }
  }

  for (let c of nums3) {
    for (let d of nums4) {
      const sumCD = c + d;
      let target = -sumCD;
      if (map.has(target)) {
        count += map.get(target);
      }
    }
  }

  return count;
};
