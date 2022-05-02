const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const zeros = [];
  let sum = 0;

  for (let line of matrix) {
    for (let i = 0; i < line.length; i++) {

      if (line[i] === 0 && !zeros.includes(i)) {
        zeros.push(i);
      } else {
        if (!zeros.includes(i)) sum += line[i];
      }

    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
