/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  [i, j] = entrance;
  maze[i][j] = "-";
  const queue = [[i, j, 0]];
  while (queue.length) {
    const [x, y, step] = queue.shift();
    for (const [dx, dy] of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const nx = x + dx,
        ny = y + dy;
      if (!maze[nx]?.[ny]) {
        if (step) return step;
      } else if (maze[nx][ny] === ".") {
        queue.push([nx, ny, step + 1]);
        maze[nx][ny] = "*";
      }
    }
  }
  return -1;
};
