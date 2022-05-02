const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let string = '';

    for (let j = 0; j < array.length; j++) {
      if (i !== j) string += array[j];
    }

    if (+string > max) max = +string;
  }

  return max;
}

module.exports = {
  deleteDigit
};
