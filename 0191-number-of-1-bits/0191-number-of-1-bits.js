/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   let c = 0;
    //n!=0 c+= n&1 都是1才會累加 n>>>=1 n右移
    while(n!==0){
        c += n&1
        n>>>=1
    }
    return c
};