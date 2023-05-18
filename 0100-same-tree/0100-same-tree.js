/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p&&!q)return true //如果都沒有那就代表一樣
    if(!p||!q)return false //一個有缺而已代表不一樣
    if(p.val !== q.val)return false //值不一樣
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)//遍歷子樹
};