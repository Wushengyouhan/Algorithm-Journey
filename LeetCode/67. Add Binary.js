/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let n = Math.max(a.length, b.length)
  
  if (a.length < b.length) {
    a = a.padStart(n, '0')
  } else {
    b = b.padStart(n, '0')
  }

  let ans = []

  let carry = 0;
  for (let i = n -1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
 
    if (sum >= 2) {
      carry = 1;
      ans.unshift(sum % 2)
    } else {
      carry = 0;
      ans.unshift(sum)
    }
  }

  if (carry === 1) {
    ans.unshift(1)
  }

  return ans.join('')
    
};