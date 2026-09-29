/**
 * @param {string} message
 * @return {string}
 */
var reverseMessage = function (message) {
  let right = message.length - 1;
  let res = [];

  while (right >= 0) {
    while (right >= 0 && message[right] === ' ') {
      right--;
    }

    if (right < 0) {
      break;
    }

    let left = right;

    while (left >= 0 && message[left] !== ' ') {
      left--;
    }

    res.push(message.slice(left + 1, right + 1));

    right = left;
  }
  return res.join(' ');
};
