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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    //如果沒節點代表是鏡像返回true
    if(!root)return true
    //子節點判斷
    return dfs(root.left,root.right)
  
};
  const dfs =(left,right)=>{
      //如果左右都沒有返回true
        if(!left&&!right)return true
      //只有一個返回false
        if(!left || !right) return false
      //值不相等//false
        if(left.val !== right.val)return false
      //計算下一層子節點左右左右
        return dfs(left.left,right.right) && dfs(left.right,right.left)
    }