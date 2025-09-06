/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const getLeafValue = (root, leafValues) => {
    if (!root) return;
    if (!root.left && !root.right) leafValues.push(root.val);

    getLeafValue(root.left, leafValues);
    getLeafValue(root.right, leafValues);
  };
  const leafValues1 = [];
  const leafValues2 = [];
  getLeafValue(root1, leafValues1);
  getLeafValue(root2, leafValues2);

  return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};
