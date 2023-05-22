function traversal(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return;
}
function insertion(arr, index, element) {
  for (let i = arr.length; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = element;
  return;
}

const array = [3, 5, 7, 9];

// console.log(array);

traversal(array);

insertion(array, 2, 6);

console.log("after insertion");

// console.log(array);
traversal(array);

// console.log(res);
