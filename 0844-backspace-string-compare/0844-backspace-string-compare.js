/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    //2個stack
    let s1 = []
    let s2 = []
    for(let i =0;i<s.length;i++){
        //有就砍掉前一個元素 沒有就加進去
        if(s[i]=='#'){
            s1.pop()
        }else{
            s1.push(s[i])
        }
    }
    for(let i =0;i<t.length;i++){
        if(t[i]=='#'){
            s2.pop()
        }else{
            s2.push(t[i])
        }
    }
    //js要加JSON.stringify
    return JSON.stringify(s1) === JSON.stringify(s2)
};