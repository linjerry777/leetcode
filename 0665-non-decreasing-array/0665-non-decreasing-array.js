/**
 * @param {number[]} nums
 * @return {boolean}
 */


var checkPossibility = function(nums) {
    //需要的次數
    let c = 0;
    

    for (let i = 1; i < nums.length; i++) {
        
        if (nums[i - 1] > nums[i]) {
            c++;
            if (i==1 || nums[i - 2] <= nums[i]) {
                nums[i - 1] = nums[i];
            } else {
                nums[i] = nums[i - 1];
            }
        }
    }
    return c <= 1;
};