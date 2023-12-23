const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const transMatrix = matrix[0].map((_, index) => {
    return matrix.map(row => row[index]);
  });

  return transMatrix.reduce((acc, item) => {
    let isStop = false;
    item.forEach(elm => {
      if (elm === 0) isStop = true;
      if (isStop) {
        return acc;
      } else {
        acc += elm;
      }
    })

    return acc;
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
