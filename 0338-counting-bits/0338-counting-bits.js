/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // //定義陣列一開始一定是0
    // let result=[0]
    // for(let i =1;i<=n;i++){
    //     //判斷最後一位是不是1
    //     if(i%2==1){
    //         //是1  ex r[3] = r[2]+1
    //         result[i]  = result[i-1] +1
    //     }else{
    //         //不是1 r[2] = r[1]
    //        result[i]  = result[i/2]
    //     }
    // }
    // return result
    //設n+1長的陣列因為第0個必然是0
    const result = new Array(n + 1).fill(0);
    //從1開始到n
    //result[i] = result [011
    //                 & 010] +1
    //                  -----
    //                   010
    for (let i = 1; i <= n; i++) {
        result[i] = result[i & (i - 1)] + 1;
    }
    return result;
};