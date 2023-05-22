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
      if (x == 0 && x<10) return true;
      if(x<0)return false
      x = x.toString()
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