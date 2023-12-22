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
function getDNSStats(domains) {
  return domains.reduce((acc, item) => {
    const itemArr = item.split('.').reverse();
    let accDomainItem = '';

    itemArr.forEach((elm) => {
      const domainValue = `${accDomainItem}.${elm}`;
      accDomainItem += `.${elm}`;
      
      if (domainValue in acc) {
        acc[domainValue] += 1;
      } else {
        acc[domainValue] = 1;
      }
    });

    return acc;
  }, {});
}

module.exports = {
  getDNSStats
};
