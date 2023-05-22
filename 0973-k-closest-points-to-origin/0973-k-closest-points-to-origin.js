/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let res = []
    //遍歷各座標sqrt長度
    for(let i=0;i<points.length;i++){
        res.push([points[i],Math.sqrt( points[i][0]*points[i][0] +  points[i][1]* points[i][1])])
    }
    //根據長度排序
    res.sort((a,b)=>a[1]-b[1])
    let res2 =[]
    //根據k取幾個座標
    for(let i =0;i<k;i++){
        res2.push(res[i][0])
    }
   return res2
    
};