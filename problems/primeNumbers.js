function primeNumbersTillNumber(number) {
    let primes = [];
    // if numer is greater than 1 then only check
    if (number > 1) {
      // loop i till number to check i is prime or not
      for (let i = 1; i <= number; i++) {
      if (isPrime(i)) {
        primes.push(i);
        }
      }
    }
    return primes;
  }
  
  function primeNumbers(count) {
      let primes = [];
      let i = 1;
      // till no of primes not becomes equals to count
      while(primes.length !== count){
          if(isPrime(i)){
              primes.push(i);
          }
          i++;
      }
      return primes;
  }
  function isPrime(number) {
    if(number === 1){
      return false;
    }
    if(number === 2) {
      return true;
    }
    // If number is odd
    if (number % 2 === 1) {
      const halfNumber = Math.ceil(number / 2);
      // Loop from 3 till lower integer of half of number
      for (let i = 3; i <= halfNumber; i = i + 2) {
        if (number % i === 0) {
          // not prime
          return false;
        }
      }
    } else {
      // if number is even
      // not prime
      return false;
    }
    // prime
    return true;
  }
  
  
  
  console.log('primes', primeNumbers(10));
  