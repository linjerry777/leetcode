/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = function (nums) {
       let a ={}
       for(let i = 0;i<nums.length;i++){
           a[nums[i]] = a[nums[i]]?a[nums[i]]+1:1
       }
       for(let one in a){
           if(a[one]== 1) 
           return one
       }
      };