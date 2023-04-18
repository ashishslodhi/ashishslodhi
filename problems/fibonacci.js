// console.log("hello");
// 0, 1, 1, 2, 3, 5, 8,13, ,.....
function getFibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let temp = 0;
  //   console.log("hello", n);
  let arr = [n1];
  for (let i = 0; i < n; i++) {
    // console.log(n1);
    // if (i == n - 1) {
    //   return n1;
    // }

    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
    temp = 0;
    arr.push(n1);
  }
  console.log("arr: ", arr);
  return arr[arr.length - 1];
}

// input : [ 0, 1, 9, 3] = [0,1,34, 2]

function getFibonacciArr(array) {
  let n1 = 0;
  let n2 = 1;
  let temp = 0;
  //   console.log("hello", n);
  let arr = [n1];
  // for(let j=0; j<array.length; j++){

  // }

  let sortArr = array.sort();
  let maxNum = sortArr[sortArr.length - 1];
  //   return maxNum;
  for (let i = 0; i < maxNum; i++) {
    // console.log(n1);
    // if (i == n - 1) {
    //   return n1;
    // }

    // console.log("equal: ", sortArr[i] === i);

    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
    temp = 0;
    arr.push(n1);
  }
  console.log("arr: ", arr);
  let fiboArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (sortArr[i] == i) {
      fiboArr.push(arr[i]);
    }
  }

  console.log(fiboArr);
  //   return arr[arr.length - 1];
}
console.log(getFibonacciArr([0, 1, 9, 3]));
