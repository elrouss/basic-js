const { NotImplementedError } = require('../lib');

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
function getCommonCharacterCount(str1, str2) {
  const obj1 = {};
  
  for (let char of str1) {
    obj1[char] ? obj1[char]++ : obj1[char] = 1;
  }
  
  let counter = 0;
    
  for (let char of str2) {
    if (obj1[char]) {
      counter++;
      obj1[char]--;
    }
  }
  
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
