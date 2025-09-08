/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let pathCount = 0;
  const getPathCount = (root, path) => {
    if (!root) return;
    path.push(root.val);
    let sum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      sum += path[i];
      if (sum === targetSum) pathCount += 1;
    }
    getPathCount(root.left, path);
    getPathCount(root.right, path);
    path.pop();
  };
  getPathCount(root, []);
  return pathCount;
};
