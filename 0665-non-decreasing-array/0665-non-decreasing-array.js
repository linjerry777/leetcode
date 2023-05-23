/**
 * @param {number[]} nums
 * @return {boolean}
 */


var checkPossibility = function(nums) {
    //需要的次數
    let c = 0;
    

    for (let i = 1; i < nums.length; i++) {
        
        //如果前一個數比現在這個大
        if (nums[i - 1] > nums[i]) {
            //代表必須來操作了 c++
            c++;
            //特殊狀況i==1 那代表nums[0]比nums[1]大 但是因為沒有nums[-1] 必須多寫出來
            //正常情況就是小山坡 [1,5,1] 像這種情況你只能把5也降到1
            if (i==1 || nums[i - 2] <= nums[i]) {
                nums[i - 1] = nums[i];
            } else {
                //如果是這種情況 [1,4,3,5]你必須將3至少拔高到4 
                nums[i] = nums[i - 1];
            }
        }
    }
    //如果<= true else false
    return c <= 1;
};