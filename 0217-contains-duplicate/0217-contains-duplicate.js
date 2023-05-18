/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   //  let card = new Set()
   // for (let i = 0; i < nums.length; i++) {
   //      if (card.has(nums[i])) {
   //          return true;
   //      } else {
   //          card.add(nums[i]);
   //      }
   //  }
   //  return false
    //es6 Set寫法 太秀了 Set它只包含唯一的元素 所以比較小就代表有重複
    return new Set(nums).size < nums.length
};