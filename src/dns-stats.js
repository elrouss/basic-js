const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.');
    
    let domain = '';
    for (let j = domains[i].length - 1; j >= 0; j--) {
      domain += '.' + domains[i][j];
      
      obj[domain] ? obj[domain]++ : obj[domain] = 1;
    }
  }
  
  return obj;
}

module.exports = {
  getDNSStats
};
