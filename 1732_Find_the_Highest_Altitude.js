/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let sum = 0,
    max = 0;
  for (i of gain) {
    sum += i;
    if (sum > max) max = sum;
  }

  return max;
};
