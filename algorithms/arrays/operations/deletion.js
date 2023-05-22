function traversal(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
  return;
}

function deletion(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  array.length -= 1;
}

const array = [4, 3, 7, 2, 6];

console.log("before deletion of index 7 in array: ", array);
deletion(array, 2);
// traversal(array, array.length - 1);
console.log("after deletion of element 7 in array: ", array);
