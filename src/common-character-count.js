const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let cnt = 0;
  const testee = s2.split('');

  for (let letter of s1) {
    if (testee.includes(letter)) {
      cnt++;
      testee.splice(testee.indexOf(letter), 1);
    }
  }

  return cnt;
}

module.exports = {
  getCommonCharacterCount
};
