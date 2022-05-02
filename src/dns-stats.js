const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domainList) {
  const domains = [];
  const result = {};

  for (let string of domainList) {
    let doms = string.split('.')
    for (let i = doms.length - 1; i >= 0; i--) {
      let temp = doms.slice(i).join('.');
      if (!domains.includes(temp)) domains.push(temp);
    }
  }

  for (let end of domains) {
    let count = 0;
    let temp;
    for (let string of domainList) {
      if (string.endsWith(end)) {
        count++;
      }
    }
    temp = '.' + end.split('.').reverse().join('.');
    result[temp] = count;
  }

  return result;
}

module.exports = {
  getDNSStats
};
