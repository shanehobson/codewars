function sum(arg1) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
    return function(arg2) {
      return arg1 + arg2;
      }
    }
  }
  
  console.log(sum(1, 3));
  console.log(sum(1)(3));