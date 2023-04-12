const { NotImplementedError } = require('../lib');

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
  const arr = [];
  
  let char = str[0];
  let counter = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    } else {
      counter === 1 ? arr.push([char]) : arr.push([counter, char]);
      
      char = str[i];
      counter = 0;
      i--;
    }
    
    if (i === str.length - 1) {
      counter === 1 ? arr.push([char]) : arr.push([counter, char]);
    }
  }
  
  return arr.flat().join('');
}

module.exports = {
  encodeLine
};
