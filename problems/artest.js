function test() {
  const arr = [1, 2, 3];
  const newArr = [1, 2, 3].map((num) => {
    console.log("typeof", typeof num === "number");
    if (typeof num === "number") return;
    return num * 2;
  });

  return newArr;
}

function arrayTest() {
  const arr = [1, 3, 4, 5, 6, 8, 9, 10];

  let newArr = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log("test: ", arrayTest());
