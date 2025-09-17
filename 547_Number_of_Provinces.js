/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let provinces = 0;
  const visited = new Set();

  const dfs = (i) => {
    visited.add(i);
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] && !visited.has(j)) dfs(j);
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
      provinces += 1;
    }
  }

  return provinces;
};
