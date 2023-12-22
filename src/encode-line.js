const { NotImplementedError } = require('../extensions/index.js');

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
  const strArray = str.split('');
  let counter = 1;
  const strObj = strArray.reduce((acc, item, index) => {
    if (item === strArray[index + 1]) {
      counter += 1;
    } else {
      if (counter === 1) {
        acc += item;
      } else {
        acc += `${counter}${item}`;
        counter = 1;
      }
    }

    return acc;
  }, '');

  return strObj;
}

module.exports = {
  encodeLine
};
