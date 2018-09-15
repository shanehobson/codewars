function descendingOrder(n){
    let numbersArray = n.toString().split("");
    let output = numbersArray.sort(function(a, b) {
      return parseInt(b) > parseInt(a);
    });
    return parseInt(output.join(""));
  }