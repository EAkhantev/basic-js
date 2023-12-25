const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
'--discard-next' // remove next elment
'--discard-prev' // remove preview elem
'--double-next' // dublicate next elm
'--double-prev' // dublicate preview elm 
function transform(arr) {
  const argIsArray = Array.isArray(arr);
  if (!argIsArray) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let skip = false;

  return arr.reduce((acc, item, index) => {
    const previousItem = arr[index - 1];
    const nextItem = arr[index + 1];

    if (item === '--discard-next') {
      if (index === arr.length) return acc; 
      skip = true;
      return acc;
    }
    if (item === '--discard-prev') {
      if (!index) return acc;
      if (previousItem != acc[acc.length - 1]) return acc;
      acc.pop();
      return acc;
    }
    if (item === '--double-next') {
      if (index === arr.length) return acc; 
      if (nextItem) acc.push(nextItem);
      return acc;
    }
    if (item === '--double-prev') {
      if (!index) return acc;
      if (previousItem != acc[acc.length - 1]) return acc;
      acc.push(previousItem);
      return acc;
    }

    if (skip) {
      skip = false;
      return acc;
    }
    
    
    acc.push(item);
    return acc;
  }, []);
}

module.exports = {
  transform
};
