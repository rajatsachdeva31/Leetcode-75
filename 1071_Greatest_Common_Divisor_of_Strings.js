/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  len1 = str1.length;
  len2 = str2.length;

  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (l1, l2) => {
    while (l2 != 0) {
      [l1, l2] = [l2, l1 % l2];
    }
    return l1;
  };

  return str1.slice(0, gcd(len1, len2));
};
