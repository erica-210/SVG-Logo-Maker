const { Circle, Square, Triangle } = require("./shape");

// sets what type of shape for test
describe("Circle", () => {
  // names what is being tested for 
  test("should create circle logo with initials", () => {
    const shape = new Circle("EMS", "orange", "blue");
    // what the test should do to pass
    expect(shape.initials).toBe("EMS");
    expect(shape.initialColor).toBe("orange");
    expect(shape.shapeColor).toBe("blue");
  });
});

describe("Square", () => {
  test("should create square logo with initials", () => {
    const shape = new Square("MVV", "pink", "green");
    expect(shape.initials).toBe("MVV");
    expect(shape.initialColor).toBe("pink");
    expect(shape.shapeColor).toBe("green");
  });
});

describe("Triangle", () => {
  test("should create triangle logo with initials", () => {
    const shape = new Triangle("AJS", "red", "purple");
    expect(shape.initials).toBe("AJS");
    expect(shape.initialColor).toBe("red");
    expect(shape.shapeColor).toBe("purple");
  });
});
