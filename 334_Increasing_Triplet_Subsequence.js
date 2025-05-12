/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num > second) {
      return true;
    }
    if (num > first) {
      second = num;
    } else {
      first = num;
    }
  }
  return false;
};
