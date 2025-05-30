/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const length = grid.length;
  let count = 0;
  const rows = new Map();

  for (let i = 0; i < length; i++) {
    const row = JSON.stringify(grid[i]);
    rows.set(row, 1 + (rows.get(row) || 0));
  }

  for (let i = 0; i < length; i++) {
    const col = JSON.stringify(grid.map((row) => row[i]));
    count += rows.get(col) || 0;
  }

  return count;
};
