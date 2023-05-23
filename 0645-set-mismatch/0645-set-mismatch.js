/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length //數組長
    let t = (n*(n+1))/2 //理應的和
    let r=-1 //重複的
    let set = new Set()
    for(let i = 0;i<nums.length;i++){
        
        //如果set有這個值了 代表重複r=重複
        //否則存進set 裡面 並且總和-去該值
        if(set.has(nums[i])){
            r = nums[i]
        }else{
            set.add(nums[i])
            t -= nums[i]
        }
    }
    return [r,t]
};