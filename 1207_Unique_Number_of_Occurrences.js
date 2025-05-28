/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let hashMap = new Map(),
    hashSet = new Set();

  for (let num of arr) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  for (let val of hashMap.values()) {
    if (hashSet.has(val)) return false;
    hashSet.add(val);
  }

  return true;
};
