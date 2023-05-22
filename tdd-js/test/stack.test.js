class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(input) {
    this.top += 1;
    this.items[this.top] = input;
  }

  pop() {
    const temp = this.items[this.top];
    this.items[this.top] = undefined;
    this.top -= 1;
    return temp;
  }
}

// start a test using describe() method which takes first parameter as a string
// to define all about the test case and second parameter will be a callback
// function which will contains the logic of all tests using it/test method
describe("My Stack", () => {
  let stack;
  // beaforAll is a method that will execute everyhthing inside its callback
  // before calling all other callbacks
  beforeAll(() => {
    stack = new Stack();
  });
  // test/it method has two parameters first will be a string to define test
  // case check and second parameter will be callback funtion which will do
  // actual logical computations to check wheather it fails or pass
  //   test.todo("is created empty"); // todo method to hold off on a test implementation
  // to make the test pass while figure things out
  // basically todo skips a test case by making it pass for temporarily

  it("is created empty", () => {
    // expectations on given input to pass the test
    expect(stack.top).toBe(-1); // toBe is a Matcher to match expectation from
    // given input to evaluate weather the test passes or fails.
    // toBe method checks for referential equality between two objects
    expect(stack.items).toEqual({});
  });

  it("can push to top", () => {
    stack.push("🐞");
    expect(stack.top).not.toBe("-1");
    expect(stack.peek).toBe("🐞");
  });

  it("can pop off", () => {
    stack.push("🐞");
    const removed = stack.pop();
    expect(removed).toBe("🐞");

    // expect(stack.peek).toEqual(undefined);
  });
});
