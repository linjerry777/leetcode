/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0] //存答案預設陣列[0]
    let sum =0 //計算當前數組大小
    for(let i =0;i<nums.length;i++){
        //如果當前還是正的累加下一個數組
        if(sum>0){
            
            sum += nums[i]
            
        }else{
            //否則=這個數組
            sum = nums[i]
        }
        //每次跑完判斷當前數組跟預設數組大小 並更新為較大的
        res = Math.max(res,sum)
    }
    return res
};