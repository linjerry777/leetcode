/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    //定義哈希表
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let result = 0;
    //當前一個數字比現在這個小時套用 當前-2*(上一個)+result 
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && romanMap[s[i]] > romanMap[s[i - 1]]) {
      result += romanMap[s[i]] - 2 * romanMap[s[i - 1]];
    } else {
      result += romanMap[s[i]];
    }
  }
  return result;
}