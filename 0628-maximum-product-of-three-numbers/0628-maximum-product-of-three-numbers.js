/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let a = nums.sort((a,b)=>b-a)
    let len  = nums.length
    // 要馬3正數 要馬2個最大負*最大正
    return Math.max(a[0]*a[1]*a[2],a[len-1]*a[len-2]*a[0])
};