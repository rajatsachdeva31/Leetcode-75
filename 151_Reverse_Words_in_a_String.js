/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ").filter((s) => s != "");
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s.join(" ");
};
