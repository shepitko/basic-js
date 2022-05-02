const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const field = [];
  const top = 0;
  const bottom = matrix.length - 1;
  const left = 0;
  const right = matrix[0].length - 1;

  for (let i = 0; i < matrix.length; i++) {
    field.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      if (i - 1 >= top && j - 1 >= left && matrix[i - 1][j - 1] === true) count++;
      if (i - 1 >= top && matrix[i - 1][j] === true) count++;
      if (i - 1 >= top && j + 1 <= right && matrix[i - 1][j + 1] === true) count++;
      if (j - 1 >= left && matrix[i][j - 1] === true) count++;
      if (j + 1 <= right && matrix[i][j + 1] === true) count++;
      if (i + 1 <= bottom && j - 1 >= left && matrix[i + 1][j - 1] === true) count++;
      if (i + 1 <= bottom && matrix[i + 1][j] === true) count++;
      if (i + 1 <= bottom && j + 1 <= right && matrix[i + 1][j + 1] === true) count++;
      field[i].push(count);
    }

  }

  return field;
}

module.exports = {
  minesweeper
};
