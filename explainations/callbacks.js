// A callback is a function passed to an function as an argument that can be executed later

// Example 1

// function clicked(e) {
//   // add a class to the button
//   this.classList.add("clicked");
// }

// const button = document.getElementById("button");
// button.addEventListener("click", clicked);

// here addEventListener accepts second argument as function that is a callback function
// because here a function i.e. addEventListener is calling a function i.e. clicked
// function as second argument
// so here clicked is the callback function

// Example 2

const numbers = [24, 13, 7, 9, 65, 11, 3];

const getlessThanTen = (num) => {
  return num < 10;
};

const lessThanTen = numbers.filter(getlessThanTen);

// In this example filter is the function that is taking argument as an another function i.e. getlessThanTen
// So getlessThanTen is the callback to filter method to the array

// Example 3
// Writing our own callback function and callback acception function

// Create a function that is accespting another function as an argument

function callbackAcceptingFunction(fn) {
  // Calls the function with any required arguments
  return fn(1, 2, 3);
}

//  callback get arguments from tha above call
const callback = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
};

// Passing callback into callback acception function i.e callbackAcceptingFunction
const result = callbackAcceptingFunction(callback);

console.log(result);
