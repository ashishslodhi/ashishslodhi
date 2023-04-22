// 1. Input unsorted elements list
// 2. Iterate over all the elements of list
// 3. check adjacent elements, if left is greater than right then swap them.
// 4. repeat step 2 and step 3 till size of elements of list or till no swap is done.
// 5. return sorted elements list

function bubbleSort(arr) {
  let swapped = true;
  let count = 0;
  do {
    swapped = false;
    console.log("on pass: ", count + 1);
    for (let i = 0; i < arr.length - 1 - count; i++) {
      
      if (arr[i] > arr[i + 1]) {
        arrayElementsSwap(arr, i, i + 1);
        swapped = true;
      }
    }
    count++;
  } while (swapped == true);
  return arr;
}

function bubbleSort1(arr) {
  let swapped = true;
  // let isSorted = false;
  // count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    // For no of passes
    swapped = false;
    console.log("on pass: ", i + 1);
    // isSorted = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      // For comparison in each pass
      if (arr[j] > arr[j + 1]) {
        arrayElementsSwap(arr, j, j + 1);
        swapped = true;
        // isSorted = false;
      }
    }
    // count++;
    if (swapped == false) {
      break;
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  // const n = arr.length;
  let isSorted = false;
  for (let i = 0; i < arr.length - 1; i++) {
    // For no of pass
    isSorted = true;
    console.log("on pass: ", i + 1);
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // For comparison in each pass
      if (arr[j] > arr[j + 1]) {
        arrayElementsSwap(arr, j, j + 1);
        isSorted = false;
      }
    }
    if (isSorted) {
      return arr;
    }
  }
}

function arrayElementsSwap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const unsortedArr = [4, 3, 7, 1, 5];
// const unsortedArr = [4, 3, 1, 5, 7];

// const unsortedArr = [1, 3, 5, 7, 9];

console.log("Unsorted array: ", unsortedArr);
console.time("execution");
console.log("Sorted array: ", bubbleSort(unsortedArr));
console.timeEnd("execution");
