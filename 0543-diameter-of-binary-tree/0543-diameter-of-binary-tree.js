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
var diameterOfBinaryTree = function(root) {
    //設高為0
    let high = 0
    //算高度
    const geth = function(node){
        //沒節點返回0
        if(!node)return 0
        //算左右子樹高度
        const rh = geth(node.right)
        const lh = geth(node.left)
        //高度等於目前高度跟左+右的高度 取大的
        high = Math.max(high,rh+lh)
        //回傳目前這個點的高度
        return Math.max(rh,lh)+1
    }
    geth(root)
    return high
};