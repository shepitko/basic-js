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
  if (options === null || typeof options !== typeof {}) return;

  const separator = 'separator' in options ? options.separator : '+';
  const repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  const addition = ('addition' in options ? options.addition : '') ?? 'null';
  const additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';
  const additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;

  const addArr = [];
  const arr = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    addArr.push(addition);
  }

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str + addArr.join(additionSeparator));
  }

  return arr.join(separator);
}

module.exports = {
  repeater
};
