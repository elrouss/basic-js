const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arr)
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (!arr.length) return [];
  
  const copy = [...arr];
  let counterDeletion = 0;

  if (['--discard-prev', '--double-prev'].includes(copy[0])) copy.splice(0, 1);
  if (['--discard-next', '--double-next'].includes(copy[copy.length - 1])) copy.splice(-1, 1);
  
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === '--discard-next') {
      copy.splice(i, 2);
      counterDeletion++;
    }
    
    if (copy[i] === '--discard-prev') {
      counterDeletion ? copy.splice(i, 1) : copy.splice(i - 1, 2);
    }
    
    if (copy[i] === '--double-next') {
      counterDeletion ? copy.splice(i, 1) : copy.splice(i, 1, copy[i + 1]);
    }
    
    if (copy[i] === '--double-prev') {
      counterDeletion ? copy.splice(i, 1) : copy.splice(i, 1, copy[i - 1]);
    }
  }
  
  return copy;
}

module.exports = {
  transform
};
