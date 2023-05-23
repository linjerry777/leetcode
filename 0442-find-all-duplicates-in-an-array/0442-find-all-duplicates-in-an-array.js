/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let r =[]
    for(let i=0;i<nums.length;i++){
        let index = Math.abs(nums[i])-1
        if(nums[index]<0){
            r.push(Math.abs(nums[i]))
        }else{
            nums[index] = -nums[index]
        }
    }
    return r
};