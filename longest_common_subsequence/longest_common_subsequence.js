function LCS(x, y) {
    let xSubstr = x.substr(0, x.length - 1);
    let ySubstr = y.substr(0, y.length - 1);
    
    if (x.length === 0 || y.length === 0) {
      return '';
    } else if (x.charAt(x.length - 1) === y.charAt(y.length - 1)) {
      return LCS(xSubstr, ySubstr) + x.charAt(x.length - 1);
    }  else {
      let a = LCS(x, ySubstr);
      let b = LCS(xSubstr, y);
      return (a.length > b.length) ? a : b;
    }
  }