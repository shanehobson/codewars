function tribonacci(signature,n){
    let a = signature[2];
    let b = signature[1];
    let c = signature[0];
    let temp1;
    let temp2;
    if (n <= 3) {
      let result = [];
      for (let i = 0; i < n; i++) {
        result.push(signature[i]);
      }
      return result;
    }
    while (n > 3) {
      temp1 = a;
      temp2 = b;
      a = a + b + c;
      b = temp1;
      c = temp2;
      signature.push(a);
      n--;
    }
    return signature;
}