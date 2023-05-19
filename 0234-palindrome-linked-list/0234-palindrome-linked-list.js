/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //先存進陣列再用雙指針去比 記得要===
    let a =[]
    
    while(head!==null){
        a.push(head.val)
        head = head.next
    }
   
    let l =0;
    let r = a.length-1
    while(l<r){
        if(a[l]===a[r]){
            l++
            r--
        }else{
            return false
        }
            
    }
     return true
    
};