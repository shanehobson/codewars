function getCount(str) {
    var vowelsCount = 0;
    var charArray = str.split("");
    charArray.forEach(char => {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") vowelsCount++;
    });  
    return vowelsCount;
  }
