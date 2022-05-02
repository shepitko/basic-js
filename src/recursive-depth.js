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
  count = 1;

  calculateDepth(arr, depth = 1) {

    for (let item of arr) {

      if (Array.isArray(item)) {

        this.count++;

        if (this.count > depth) depth++;

        depth = this.calculateDepth(item, depth);

        this.count--;
      }

    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};
