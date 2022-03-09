const { duplicateEncode } = require("../src/duplicateEncode");
const assert = require("assert");

describe("Duplicate encode fuction", () => {
  it("Should convert a din to a new string ((( ", () => {
    assert.equal(duplicateEncode("din"),"(((");
  });

  it("Should convert a recede to a new string ()()()", () => {
    assert.equal(duplicateEncode("recede"),"()()()");
  });

  it("Should convert a (( @ to a new string ))((", () => {
    assert.equal(duplicateEncode("(( @"),"))((");
  });

  it("Should convert a Success to a new string )())())", () => {
    assert.equal(duplicateEncode("Success"),")())())");
  });
});

