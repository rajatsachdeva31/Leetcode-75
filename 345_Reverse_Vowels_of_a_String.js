/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let i = 0,
    j = s.length;
  a = s.split("");

  while (i < j) {
    while (i < j && !vowels.has(a[i])) i++;
    while (i < j && !vowels.has(a[j])) j--;
    [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  }

  return a.join("");
};
