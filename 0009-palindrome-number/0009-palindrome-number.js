/**
 * @param {number} x
 * @return {boolean}
 */
  var isPalindrome = function (x) {
        // if (x == 0) return true;
        // if (x % 10 == 0 || x < 0) {
        //   return false;
        // } else {
        //     let r = x.toString().split("").reverse().join("")
        //   if(r != x){
        //     return false
        //   }else{
        //     return true
        //   }
        // }
      //0-9 true <0 = false
      if (x == 0 && x<10) return true;
      if(x<0)return false
      //轉數組
      x = x.toString()
      //雙指針頭!=尾return false
      let l =0;
      let r = x.length-1
      while(l<=r){
          if(x[l]!==x[r]) {
              return false
          }
          l++
          r--
      }
      return true
        
      };