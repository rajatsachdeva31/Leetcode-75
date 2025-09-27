/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let neighbors = {};
  let connection = new Set();

  for (const [a, b] of connections) {
    if (!neighbors[a]) neighbors[a] = [];
    if (!neighbors[b]) neighbors[b] = [];
    neighbors[a].push(b);
    neighbors[b].push(a);
    connection.add(`${a},${b}`);
  }

  let reverse = 0;

  const dfs = (node, parent) => {
    for (const neighbor of neighbors[node]) {
      if (neighbor === parent) continue;
      if (connection.has(`${node},${neighbor}`)) {
        reverse++;
      }
      dfs(neighbor, node);
    }
  };

  dfs(0, -1);
  return reverse;
};
