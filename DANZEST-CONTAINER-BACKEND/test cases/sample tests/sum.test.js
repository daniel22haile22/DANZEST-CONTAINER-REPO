const mathOperations = require("./sum");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
});

describe("Calculator tests", () => {
  test("Subtructing 1 - 2 should return -1", () => {
    // arrange and act
    var result = mathOperations.diff(1, 2);

    // assert
    expect(result).toBe(-1);
  });
});

 describe("Calculator tests", () => {
   test("Multiplying 1 * 2 should return 2", () => {
     var result = mathOperations.product(1, 2);

     expect(result).toBe(2);
   });
 });
