const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber <= 0) return { turns: 0, seconds: 0 };

  if (disksNumber === 1) return { turns: 1, seconds: +(1 * 3600 / turnsSpeed).toFixed(2) };

  if (disksNumber === 2) return { turns: 3, seconds: Math.floor(3 * 3600 / turnsSpeed) };

  if (disksNumber === 3) return { turns: 7, seconds: Math.floor(7 * 3600 / turnsSpeed) };

  if (disksNumber > 3) {
    let turns = 7;
    for (let i = 3; i < disksNumber; i++) {
      turns = turns * 2 + 1;
    }

    return { turns, seconds: Math.floor(turns * 3600 / turnsSpeed) };
  }
}

module.exports = {
  calculateHanoi
};
