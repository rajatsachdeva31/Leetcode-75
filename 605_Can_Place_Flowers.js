/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n == 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    const left = i == 0 || flowerbed[i - 1] == 0;
    const right = i == flowerbed.length - 1 || flowerbed[i + 1] == 0;

    if (left && right && flowerbed[i] == 0) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }
  return n <= 0;
};
