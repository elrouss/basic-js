const { NotImplementedError } = require('../lib');

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
function deleteDigit(num) {
  let arr = String(num).split('');
  let max = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let interimNum = arr[i];
    
    arr.splice(i, 1);
    
    let newNum = arr.join('');
    if (newNum > max) max = newNum;
    
    arr.splice(i, 0, interimNum);
  }

  return +max;
}

module.exports = {
  deleteDigit
};
