function swapInsertion(arr, element, index) {
  arr[arr.length] = arr[index];
  arr[index] = element;
}

function arraySwap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  let isSorted = false;
  for (let i = 0; i < arr.length - 1; i++) {
    isSorted = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        arraySwap(arr, j, j + 1);
        isSorted = false;
      }
    }
    if (isSorted) {
      return arr;
    }
  }
}

const array = [9, 3, 6, 2, 5];

console.log("Before insertion: ", array);

swapInsertion(array, 8, 2); // Insert 8 at index 2

console.log("After insertion: ", array);

console.log("sorted array: ", bubbleSort(array));
