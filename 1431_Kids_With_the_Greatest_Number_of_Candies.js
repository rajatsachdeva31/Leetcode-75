/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  let isGreatest = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      isGreatest.push(true);
    } else {
      isGreatest.push(false);
    }
  }

  return isGreatest;
};
