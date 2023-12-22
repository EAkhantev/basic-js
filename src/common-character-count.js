const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
  const firstStrArr = s1.split('');
  const secondStrArr = s2.split('');

  return firstStrArr.reduce((acc, item) => {
    const matchID = secondStrArr.indexOf(item);
    if (matchID != -1) {
      secondStrArr.splice(matchID, 1);
      acc += 1;
      return acc;
    };
    
    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
