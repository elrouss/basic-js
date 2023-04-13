const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  
  for (let i = 0; i < repeatTimes; i++) {
    res += String(str);
    
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += String(addition);
      
      if (j < additionRepeatTimes - 1) res += additionSeparator;
    }

    if (i < repeatTimes - 1) res += separator;
  }
  
  return res;
}

module.exports = {
  repeater
};
