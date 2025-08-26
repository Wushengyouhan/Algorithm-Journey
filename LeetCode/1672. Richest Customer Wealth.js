/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((a) => a.reduce((acc, curr) => acc + curr, 0))
  );
};