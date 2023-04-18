"use strict";
// 1) Find the next palindrome number. If I pass any integer value to function it should return the next palindrome number.
// For example:
// If I pass 105 - it should return 111
// If I pass 100 - it should return 101
function nextPalindrome(n) {
  var rem,
    temp,
    final = 0;
  temp = n;

  while (n > 0) {
    rem = n % 10;
    n = parseInt(n / 10);
    final = final * 10 + rem;
  }

  if (temp == final) {
    return temp;
  } else {
    temp = temp + 1;
    return nextPalindrome(temp);
  }
}

console.log("palindrome: ", nextPalindrome(100));

// 2) Print the first “n” prime numbers. N is anything a user might enter.
// For example:
// n = 5 Output is 2,3,5,7,11
// n = 8 Output is 2,3,5,7,11,13,17,19
// xfw-nphh-akk
