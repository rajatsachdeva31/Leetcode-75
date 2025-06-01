/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stack = [];

  for (char of s) {
    if (char === "*" && stack.length) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
