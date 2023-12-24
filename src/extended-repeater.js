const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeat = typeof str != 'string' ? String(str) : str;
  const repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  const separator = options.separator === undefined ? '+' : options.separator;
  let strAddition = '';
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  
  if ('addition' in options) {
    const addition = typeof options.addition != 'string' ? String(options.addition) : options.addition;
    const additionArray = Array(additionRepeatTimes).fill(addition);
    strAddition = additionArray.join(additionSeparator);
  }

  const strArray = Array(repeatTimes).fill(repeat.concat(strAddition));
  const result = strArray.join(separator);

  return result;
}

module.exports = {
  repeater
};
