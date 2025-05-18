/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const s_len = s.length;
  const t_len = t.length;

  if (s_len > t_len) return false;

  let i = 0;
  let j = 0;

  while (i < s_len && j < t.length) {
    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i == s_len;
};
