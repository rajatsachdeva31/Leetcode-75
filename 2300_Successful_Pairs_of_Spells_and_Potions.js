/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

var successfulPairs = function (spells, potions, success) {
  const pairs = new Array(spells.length);
  potions.sort((a, b) => a - b);
  const p = potions.length;

  for (let i = 0; i < spells.length; i++) {
    let s = spells[i];
    const need = Math.floor((success + s - 1) / s);
    let l = 0,
      r = p;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (potions[mid] < need) l = mid + 1;
      else r = mid;
    }
    pairs[i] = p - l;
  }
  return pairs;
};
