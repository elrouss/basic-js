const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity
      || sampleActivity == 0
      || typeof sampleActivity === 'object'
      || typeof sampleActivity === 'number'
      || sampleActivity < 0
      || Number.isNaN(sampleActivity / 1)
      || !sampleActivity.replace(/\s/g, '').length) return false;
  
  const MODERN_ACTIVITY = 15,
        HALF_LIFE_PERIOD = 5730 / Math.LN2;
  
  const res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD);
  
  return res > 0 ? res : false;
}


module.exports = {
  dateSample
};
