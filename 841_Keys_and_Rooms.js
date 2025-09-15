/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let keys = new Set([0]);
  for (const room of keys) {
    rooms[room].forEach((key) => keys.add(key));
  }
  return keys.size === rooms.length;
};
