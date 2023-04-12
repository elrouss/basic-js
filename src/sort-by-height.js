const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const length = arr.length;
  const indexes = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexes.push(i);
    }
  }
  
  arr.sort((a, b) => a - b).splice(0, indexes.length);
  
  for (let i = 0; i < length; i++) {
    if (indexes.includes(i)) {
      arr.splice(i, 0, -1);
    }
  }
  
  return arr;
}

module.exports = {
  sortByHeight
};
