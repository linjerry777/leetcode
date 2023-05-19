/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    //如果沒有返回''
    if(!strs.length) return ''
    //res = 字串的第一個單字
    let res = strs[0]
    //ch = flower、flow、flight
    for(ch of strs){
        for(let i =0;i<res.length;i++){
            if(ch[i] !== res[i]){
                res = res.slice(0,i)
                break
            }
        }
    }
    return res
}