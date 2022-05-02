const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cnt = 0;

  for (let boxes of matrix) {
    for (let box of boxes) {
      if (box === '^^') cnt++;
    }
  }
  return cnt;
}

module.exports = {
  countCats
};
