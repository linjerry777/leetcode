/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    //好吧一個基本的解哈希表
       let hashmap = {}
       //比較用
       let max =0
       //結果
       let result = null
       //把數組裝進表中變成{1:1,2:3}這種感覺
       for(let i =0;i<nums.length;i++){
           let char = nums[i]
           hashmap[char] =  hashmap[char]?  hashmap[char]+1:1
           //如果值比max max改成那個值直到找出最大的值 返回那個值的key
           if(hashmap[char]>max){
               max = hashmap[char]
               result = char
           }
       }
    return result
        
    };