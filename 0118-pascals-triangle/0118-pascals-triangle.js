/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //存答案
    let res =[]
    for(let i =0;i<numRows;i++){
        // 每一層先鋪滿1
        const row = new Array(i+1).fill(1)
        //計算每一層不包含頭跟尾的值
        for(let j = 1;j<row.length-1;j++){
            //第0個值是1 第1個值是 上一層的值跟上一層這個左邊的值
            row[j] = res[i-1][j-1] + res[i-1][j]
        }
        //存回陣列
        res.push(row)
    }
    return res
};
