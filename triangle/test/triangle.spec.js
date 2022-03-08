const {isTriangle} = require("../src/triangle")
const assert = require("assert");

describe("Triangle function function",()=>{
    it("Should return true if b plus c is greater than a",()=>{
        assert.equal(isTriangle(1,2,2),true)
    })

    it("Should return false if b plus c is lower than a",()=>{
        assert.equal(isTriangle(7,2,2),false)
    })

    it("Should return false if there exist negative number",()=>{
        assert.equal(isTriangle(10,-2,3),false)
    })
})