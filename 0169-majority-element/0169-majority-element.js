/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
       let hashmap = {}
       let max =0
       let result = null
       for(let i =0;i<nums.length;i++){
           let char = nums[i]
           hashmap[char] =  hashmap[char]?  hashmap[char]+1:1
           
           if(hashmap[char]>max){
               max = hashmap[char]
               result = char
           }
       }
    return result
        
    };