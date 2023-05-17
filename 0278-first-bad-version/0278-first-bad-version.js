/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //設定邊界
        let left = 1;
        let right = n;
        //當左小於右 不用<=是因為left+1會=right時還會多跑一次沒必要
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            //如果mid是壞掉的目標數(會返回true or false)
            if (isBadVersion(mid)) {
                //代表在中位數左邊右側縮減
            right = mid;
            } else {
                //中位數右邊且不為中位數左側縮減
            left = mid + 1;
            }
        }
        
        return left;
    };
};