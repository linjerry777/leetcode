/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let set = new Set(nums)
  let r= []
  for(let i =1;i<=nums.length;i++){
      if(!set.has(i)){
          r.push(i)
      }
  }
  return r
};