const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return str;

  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {

    if (i + 1 === str.length) {

      if (count === 1) result += str[i];
      else result += count + str[i];

    } else {

      if (str[i] !== str[i + 1]) {

        if (count === 1) {
          result += str[i];
        } else {
          result += count + str[i];
          count = 1;
        }

      } else {
        count++;
      }

    }

  }

  return result;
}

module.exports = {
  encodeLine
};
