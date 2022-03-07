const {sumTwoSmallestNumbers} = require("../src/sum")
const assert = require("assert");

describe("Sum two smallest numbers function",()=>{
    it("Should sum two smallest number",()=>{
        assert.equal(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13)
    })
})