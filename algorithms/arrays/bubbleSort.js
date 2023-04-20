function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped == true);
  return arr;
}

function bubbleSort1(arr) {
  let swapped;

  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  return arr;
}

const unsortedArr = [4, 3, 7, 1, 5];

console.log("Unsorted array: ", unsortedArr);

console.log("Sorted array: ", bubbleSort1(unsortedArr));
