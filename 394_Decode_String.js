/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let i = 0;

  function decode() {
    let res = "";
    while (i < s.length && s[i] !== "]") {
      if (isNaN(s[i])) {
        res += s[i++];
      } else {
        let num = 0;
        while (!isNaN(s[i])) {
          num = num * 10 + parseInt(s[i++]);
        }
        i++;
        const sub = decode();
        i++;
        res += sub.repeat(num);
      }
    }
    return res;
  }
  return decode();
};
