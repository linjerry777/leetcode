/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //如果<=2階答案就是n
    if(n<=2)return n
    //設定前一階跟前前一階的有幾種方法 1階1種 2階2種
    let pre1 =1
    let pre2 =2
    //從第3階爬到n階
    for(let i =3;i<=n;i++){
        //count=上階+上上階
        let count = pre1+pre2
        //上上階 = 上階
        pre1 = pre2
        //上階 = 這階
        pre2 = count
    }
    //回傳這階
    return pre2
};