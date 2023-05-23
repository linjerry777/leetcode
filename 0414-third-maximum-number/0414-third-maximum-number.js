/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // let set = [...new Set(nums)].sort((a,b)=>b-a)
    // if(set.length>=3){
    //     return set[2]
    // }else{
    //     return set[0]
    // }
    
    let a = -Infinity,b = -Infinity,c = -Infinity
    for(let i =0;i<nums.length;i++){
        if(nums[i]>a){
            c=b
            b=a
            a=nums[i]
        }else if(nums[i]<a&&nums[i]>b){
            c=b
            b=nums[i]
        }else if(nums[i]<b&&nums[i]>c){
            c=nums[i]
        }
    }
    return c ===-Infinity?a:c
    
};