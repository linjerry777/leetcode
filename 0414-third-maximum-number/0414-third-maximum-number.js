/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = [...new Set(nums)].sort((a,b)=>b-a)
    if(set.length>=3){
        return set[2]
    }else{
        return set[0]
    }
    
};