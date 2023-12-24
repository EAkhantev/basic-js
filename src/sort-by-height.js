const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrayFiltered = arr.filter( elm => elm != -1).sort((a, b) => a - b);
  let counter = 0;

  return arr.map(elm => {
    if (elm != -1) {
      elm = arrayFiltered[counter];
      counter += 1;
      return elm
    } else {
      return elm = -1;
    }
  });
}

module.exports = {
  sortByHeight
};
