const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  const numberElements = String(n).split('');
  const arrNumbers = numberElements.reduce ((acc, _, index) => {
    const numberElm = String(n).split('');
    numberElm.splice(index, 1);
    acc.push(Number(numberElm.join('')));
    return acc;
  }, []);

  return Math.max(...arrNumbers);
}

module.exports = {
  deleteDigit
};
