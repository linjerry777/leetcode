/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left = 0
    let count =0
    let max = 0
    while(left < nums.length){
        if(nums[left]===1){
            count++
        }else{
            count =0
        }
        
        if(count>max){
            max=count
        }
        left++
    }
    return max
};