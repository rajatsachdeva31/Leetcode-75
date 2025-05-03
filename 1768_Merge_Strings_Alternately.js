/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  // const len1 = word1.length
  // const len2 = word2.length

  // const len = len1 > len2 ? len2 : len1
  // let i = 0
  let word = "";
  // while (i <= len - 1) {
  //     word += word1[i] + word2[i]
  //     i += 1
  // }

  // if (len1 > len2) {
  //     word += word1.substr(i, len1 - 1)
  // } else {
  //     word += word2.substr(i, len2 - 1)
  // }
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) word += word1[i];
    if (i < word2.length) word += word2[i];
  }
  console.log(word);
  return word;
};
