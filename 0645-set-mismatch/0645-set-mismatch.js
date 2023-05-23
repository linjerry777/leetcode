/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length
    let t = (n*(n+1))/2
    let r=-1
    let set = new Set()
    for(let i = 0;i<nums.length;i++){
        if(set.has(nums[i])){
            r = nums[i]
        }else{
            set.add(nums[i])
            t -= nums[i]
        }
    }
    return [r,t]
};