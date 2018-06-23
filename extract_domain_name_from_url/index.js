function domainName(url){
    let startIndex = 0;
    let endIndex = url.length - 1;
    if (url.indexOf('https://') === 0) {
      startIndex = (url.indexOf('//www.') > -1) ? 12 : 8;
    } else if (url.indexOf('http://') === 0) {
      startIndex = (url.indexOf('//www.') > -1) ? 11 : 7;
    } else if (url.indexOf('www.') === 0) {
      startIndex = 4;
    } 
    for (let i = startIndex; i < url.length; i++) {
      if (url.charAt(i) === '.' || url.charAt(i) === '/') {
        endIndex = i;
        break;
      }
    }
    return url.substring(startIndex, endIndex);
  }
  