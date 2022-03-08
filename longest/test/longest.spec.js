const {longest} = require("../src/longest")
const assert = require("assert");

describe("Longest fuction",()=>{
    it("Should return longest distinct sorted word",()=>{
        assert.equal(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    })
    it("Should return longest distinct sorted word",()=>{
        assert.equal(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    })
    it("Should return longest distinct sorted word",()=>{
        assert.equal(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    })
})