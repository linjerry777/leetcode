/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //用parseInt數字過大精度會丟失
    let sum = BigInt(`0b${a}`)+BigInt(`0b${b}`)
    return sum.toString(2);
};