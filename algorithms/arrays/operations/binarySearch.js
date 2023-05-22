function binarySearch(arr, search) {
  let low = 0,
    high = arr.length - 1;
  if (arr[low] == search) {
    return low;
  }
  if (arr[high] == search) {
    return high;
  }
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log("mid: ", mid);
    if (arr[mid] == search) {
      return mid;
    }
    if (search > arr[mid]) {
      low = mid++;
    } else {
      high = mid--;
    }
  }

  return -1;
}

// Sorted array
const array = [23, 56, 78, 92, 103, 108, 201, 223, 438, 985, 992];

const search = 223;
console.time("execution");

const found = binarySearch(array, search);
console.timeEnd("execution");

console.log(`${search} found at index ${found}`);
