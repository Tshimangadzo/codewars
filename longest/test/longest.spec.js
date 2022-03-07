const {longest} = require("../src/longest")
const assert = require("assert");

describe("Sum two smallest numbers function",()=>{
    it("Should sum two smallest number",()=>{
        assert.equal(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    })
})