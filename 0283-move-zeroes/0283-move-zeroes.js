/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
     //慢指針--將不為0的數字往前排
      let j =0;
      for(let i=0;i<nums.length;i++){
          if(nums[i]!==0){
              nums[j++] = nums[i]
          }
      }
     //後面填0
        for(let i=j;i<nums.length;i++){
            nums[i]=0
        }
     
      };