/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = function (nums) {
       //哈希表小朋友才用
       // let a ={}
       // for(let i = 0;i<nums.length;i++){
       //     a[nums[i]] = a[nums[i]]?a[nums[i]]+1:1
       // }
       // for(let one in a){
       //     if(a[one]== 1) 
       //     return one
       // }
       
       //xor 這到底是什麼古老的邏輯
        let n = nums[0]
        for(let i =1;i<nums.length;i++){
            n ^= nums[i]
        }
        return n
      };