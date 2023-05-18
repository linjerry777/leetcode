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
var maxDepth = function(root) {
    //如果沒這個點返回0
    if (!root) return 0;
    //有就返回該點的左右子樹比較長的那邊並且+上原本的1
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};