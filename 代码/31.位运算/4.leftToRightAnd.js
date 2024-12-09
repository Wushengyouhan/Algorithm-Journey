/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  while (left < right) {
    //right减去right最右侧的1
    right -= right & -right;
  }

  return right;
};
