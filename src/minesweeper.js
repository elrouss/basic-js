const { NotImplementedError } = require('../lib');

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
  const res = [];
  
  for (let subArr of matrix) {
    if (subArr) res.push([]);
  }
  
  const columnCounter = matrix[0].length;
  
  for (let i = 0; i < columnCounter; i++) {
    let counter = 0;
    
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j - 1]) {
        if (matrix[j - 1][i] == 1) counter++;
      }
      
      if (matrix[i - 1] && matrix[j - 1]) {
        if (matrix[j - 1][i - 1] == 1) counter++;
      }
      
      if (matrix[i - 1]) {
        if (matrix[j][i - 1] == 1) counter++;
      }
      
      if (matrix[i - 1] && matrix[j + 1]) {
        if (matrix[i - 1][j + 1] == 1) counter++;
      }
      
      if (matrix[j + 1]) {
        if (matrix[j + 1][i] == 1) counter++;
      }
      
      if (matrix[j + 1] && matrix[i + 1]) {
        if (matrix[j + 1][i + 1] == 1) counter++;
      }
      
      if (matrix[i + 1]) {
        if (matrix[j][i + 1] == 1) counter++;
      }
      
      if (matrix[j - 1] && matrix[i + 1]) {
        if (matrix[j - 1][i + 1] == 1) counter++;
      }
      
      res[j].push(counter);
      counter = 0;
    }
  }
  
  return res;
}

module.exports = {
  minesweeper
};
