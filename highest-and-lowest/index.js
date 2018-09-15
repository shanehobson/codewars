function highAndLow(numbers){
    let numsArray = numbers.split(" ");
    let highest = numsArray.reduce(function(a, b) {
      return Math.max(a, b);
    });
    let lowest = numsArray.reduce(function(a, b) {
      return Math.min(a, b);
    });
    return `${highest} ${lowest}`;
  }