decodeMorse = function(morseCode){
    const wordsArray = morseCode.trim().split("   ");
    let englishWords = wordsArray.map(word => {
        let charArray = word.split(" ");
        let englishChars = charArray.map(char => {
          return MORSE_CODE[char];
        });
        return englishChars.join("");
     });
    return englishWords.join(" ");
   }