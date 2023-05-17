/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //建一個哈希表存mag裡面給的字
    let hashmap = {}
    for(let i = 0;i<magazine.length;i++){
        let char = magazine[i];
        //如果hash表裏面有該值+1 沒有設為1
        hashmap[char] =  hashmap[char]  ?  hashmap[char] +1: 1
    }
    
    for(let i = 0;i<ransomNote.length;i++){
        let char = ransomNote[i];
        //如果表裏面有該值--阿如果沒有返回false
        if(hashmap[char]){
             hashmap[char]--
        }else{
            return false
        }
    }
    return true
};