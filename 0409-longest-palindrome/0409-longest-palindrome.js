/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //鬼思路
    //用這Set has=看裡面有啥 delete=刪除 add=新增
    //創一個set
    let temp = new Set()
    //算長度
    let sum =0;
    //s拆成數組遍歷
    s.split('').forEach((c)=>{
        //如果這set有這個值刪掉並且長度+2 沒有就把這個字加進去
        if(temp.has(c)){
            temp.delete(c)
            sum+=2
        }else{
            temp.add(c)
        }
    })
    //如果還有字在裡面 最後長度+1
    return sum += (temp.size>0?1:0)
};