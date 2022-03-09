const { binaryArrayToNumber } = require("../src/binaryArrayToNumber");
const assert = require("assert");

describe("Binary array to number fuction", () => {
  it("Should convert binary 0001 to integer 1", () => {
    assert.equal(binaryArrayToNumber([0, 0, 0, 1]), 1);
  });

  it("Should convert binary 1011 to integer 11", () => {
    assert.equal(binaryArrayToNumber([1, 0, 1, 1]), 11);
  });

  it("Should convert binary 1111 to integer 15", () => {
    assert.equal(binaryArrayToNumber([1, 1, 1, 1]), 15);
  });
});
