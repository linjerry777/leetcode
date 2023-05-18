/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let card = new Set()
   for (let i = 0; i < nums.length; i++) {
        if (card.has(nums[i])) {
            return true;
        } else {
            card.add(nums[i]);
        }
    }
    return false
};