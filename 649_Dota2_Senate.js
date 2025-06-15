/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let radiant = [];
  let dire = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    senate[i] === "R" ? radiant.push(i + n) : dire.push(i + n);
  }

  while (radiant.length > 0 && dire.length > 0) {
    radiant[0] < dire[0]
      ? radiant.push(radiant[0] + n)
      : dire.push(dire[0] + n);
    radiant.shift();
    dire.shift();
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
};
