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
 * @return {number}
 */
var goodNodes = function (root) {
  let goodNodesCount = 0;
  const getMaxCount = (root, max) => {
    if (!root) return;
    if (root.val >= max) goodNodesCount += 1;
    max = Math.max(max, root.val);
    getMaxCount(root.left, max);
    getMaxCount(root.right, max);
  };
  getMaxCount(root, root.val);
  return goodNodesCount;
};
