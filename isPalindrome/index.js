//Using built-in reverse method
function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
  }
  
  console.log(isPalindrome('racecar'));
  
  //Doing it without built-it reverse method
  function isPal(str) {
    if (str.length === 1) return true;
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
  }
  
  console.log(isPal('racecar'));
  
  //Using recursion
  function isPalRec(str) {
    let strLen = str.length;
    if (strLen === 1 || strLen === 0) return true;
    if (str[0] !== str[strLen - 1]) return false;
    return isPalRec(str.slice(1, strLen - 1));
  }
  
  console.log(isPalRec('racecar'));