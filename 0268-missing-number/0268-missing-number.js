/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // let res =nums.length
    // for(let i =0;i<nums.length;i++){
    //     res ^= (nums[i]^i)
    // }
    // return res
    
    nums.sort((a,b)=>a-b)
    let n =nums.length
    for(let i =0;i<n;i++){
       
        if(nums[i]!==i)return i
    }
    return n                   
};