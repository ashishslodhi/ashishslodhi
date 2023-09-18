function isPalindrome(word) {
    // By inbuilt functions
    //   if (word.split('').reverse().join('') == word) {
    //     return true;
    //   }
    //   return false;
  
    //Decrementing loop
    //   let newWord = '';
    //   for (i = word.length - 1; i >= 0; i--) {
    //     newWord = newWord + word[i];
    //   }
    //   if (newWord == word) {
    //     return true;
    //   }
    //   return false;
    console.log(word.charAt(0));
    console.log(word.substr(1));
  
    //   return word.substr(1);
  }
  
  function countdown(i) {
    //   if (i) {
    console.log(i);
    //   }
    if (i == 0) {
      // base case
      return;
    } else {
      // recursive case
      countdown(i - 1);
    }
  }
  
  // console.log('palindrome: ', isPalindrome('malayalam'));
  console.log(countdown(10));
  