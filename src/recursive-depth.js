const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    const totalArrayDimention = arr.reduce((acc, item) => {
      const itemIsArray = Array.isArray(item);
  
      if (itemIsArray) {
        const itemDimention = this.calculateDepth(item);

        if (itemDimention > acc) {
          acc = itemDimention;
        }
      }
      
      return acc;
    }, 0);

    return totalArrayDimention + 1;
  }
}

module.exports = {
  DepthCalculator
};
