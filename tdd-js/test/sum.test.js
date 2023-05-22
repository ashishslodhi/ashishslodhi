const sum = require("../sum.js");

test("sum is adding properly", () => {
  expect(sum(1, 2)).toBe(3);
});
