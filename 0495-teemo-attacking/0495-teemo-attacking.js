/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let c=0
    for(let i =1;i<timeSeries.length;i++){
        if(timeSeries[i]-timeSeries[i-1] < duration){
            c+=timeSeries[i]-timeSeries[i-1]
        }else{
            c+=duration
        }
    }
    return c+=duration
};