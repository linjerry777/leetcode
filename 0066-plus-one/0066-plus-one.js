/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join('')); // 將數組轉換為一個大整數
    num++; // 將大整數加1
    return num.toString().split('') ;
};