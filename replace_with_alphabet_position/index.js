function alphabetPosition(text) {
    let result = [];
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let textArr = text.toLowerCase().split("");
    textArr.forEach(char => {
      if (alphabet.indexOf(char) > -1) {
          result.push(alphabet.indexOf(char) + 1);
      }
    });
    return result.join(" ");
}