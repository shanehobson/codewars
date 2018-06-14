//Instructions: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    let stringArr = str.split(" ");
    let resultArr = [];
    stringArr.forEach(item => {
      let res;
      if (!item.match(/^[A-z]+$/)) {
        res = item;
      } else {
        res = item.slice(1) + item.slice(0, 1) + 'ay';
      }
      resultArr.push(res);
    });
    return resultArr.join(" ");
  }

  