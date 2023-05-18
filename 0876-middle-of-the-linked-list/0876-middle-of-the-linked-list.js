/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    //雙指針
    let slow;
    let fast;
    slow= fast = head
    //如果快指針跟next都還有 快指針走2格慢指針1格 代表慢指針最後只會走一半 就是我們求得中心點
    while(fast&&fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};