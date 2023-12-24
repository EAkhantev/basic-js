const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const gameBoard = matrix.reduce((acc, item) => {
    const itemFilled = item.map((elm) => {
      elm = 0;
      return elm;
    });
    acc.push(itemFilled);
    return acc;
  }, []);

  const matrixRowSize = gameBoard.length - 1;
  const matrixColSize = gameBoard[0].length - 1;

  matrix.forEach((item, rowID) => {
    item.forEach((elm, colID) => {
      if (elm) {
        const rowIndexUp = rowID - 1;
        const rowIndexDown = rowID + 1;
        const colIndexLeft = colID - 1;
        const colIndexRight = colID + 1;

        const rowUpIsInside = rowIndexUp >= 0;
        const rowDownIsInside = rowIndexDown <= matrixRowSize;
        const colLeftIsInside = colIndexLeft >= 0;
        const colRightIsInside = colIndexRight <= matrixColSize;
        
        if (rowUpIsInside) {
          if (colLeftIsInside) {
            const NW = gameBoard[rowIndexUp][colIndexLeft] += 1;
          }
          const N = gameBoard[rowIndexUp][colID] += 1;
          if (colRightIsInside) {
            const NE = gameBoard[rowIndexUp][colIndexRight] += 1;
          }
        }
        
        if (colLeftIsInside) {
          const W = gameBoard[rowID][colIndexLeft] += 1;
        }
        if (colRightIsInside) {
          const E = gameBoard[rowID][colIndexRight] += 1;
        }

        if (rowDownIsInside) {
          if (colLeftIsInside) {
            const SW = gameBoard[rowIndexDown][colIndexLeft] += 1;
          }
          const S = gameBoard[rowIndexDown][colID] += 1;
          if (colRightIsInside) {
            const SE = gameBoard[rowIndexDown][colIndexRight] += 1;
          }
        }
      }
    });
  });

  return gameBoard;
}

module.exports = {
  minesweeper
};
