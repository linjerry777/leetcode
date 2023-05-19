/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   let c = 0;
    while(n!==0){
        c += n&1
        n>>>=1
    }
    return c
};