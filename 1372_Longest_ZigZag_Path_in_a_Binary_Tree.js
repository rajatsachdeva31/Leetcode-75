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
var longestZigZag = function (root) {
  let maxLength = 0;
  const dfs = (node, isLeft, length) => {
    if (!node) return;
    maxLength = Math.max(maxLength, length);
    dfs(node.left, false, isLeft ? length + 1 : 1);
    dfs(node.right, true, !isLeft ? length + 1 : 1);
  };
  dfs(root, true, 0);
  dfs(root, false, 0);
  return maxLength;
};
