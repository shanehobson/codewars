function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < (num - 1); i++) {
      if (!(num % i)) return false;
    }
    return true;
  }