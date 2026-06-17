/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = Math.max(...piles);
  let k = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (const pile of piles) hours += Math.ceil(pile / mid);
    if (hours <= h) {
      k = mid;
      right = mid - 1;
    } else left = mid + 1;
  }
  return k;
};
