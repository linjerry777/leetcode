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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(s, t) {
  if(!s){
    return false;
  }
  let result = subTreeHelper(s,t);
  if(result){
    return true;
  }
  return isSubtree(s.left,t) || isSubtree(s.right,t);
};
function subTreeHelper(s,t){
    if(s &&!t){
      return false;
    }
    //两边都没有
    if(!s&&!t){
      return true;
    }
    //只有一个
    if(!s||!t){
      return false;
    }
    if(s.val !== t.val){
      return false;
    }
    return subTreeHelper(s.left,t.left) && subTreeHelper(s.right,t.right)
}


