const { helloWorld } = require("../src/hello");
const sinon = require("sinon");
const assert = require("assert");

describe("Hello function", () => {
  
  it("Should call console log with Hello World", () => {
   let spy = sinon.spy(console, "log");
   helloWorld();
   assert(spy.calledWith("Hello World!"));
  });
});
