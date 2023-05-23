/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    //哈希表
    
    let hash ={}
    let len = nums.length
    for(let i =0;i<nums.length;i++){
        if(nums[i]>0){
            hash[nums[i]] = 1
        }
    }
    for(let i =1;i<=nums.length;i++){
        if(!hash[i]){
            return i
        }
    }
    
    
    
    
    
    return len+1
};