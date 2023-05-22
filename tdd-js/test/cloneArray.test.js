const cloneArray = require("../cloneArray.js");

test("array getting coppied properly", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toBe(array);
});
