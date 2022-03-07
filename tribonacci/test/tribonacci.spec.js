const {tribonacci,errStrings} = require('../src/tribonacci')
const sinon = require("sinon");
const assert = require("assert");

describe('Tribonnacci function',()=>{

    it("Should return Invalid input if the size of signature is less than three",()=>{
        assert.equal(tribonacci([1,2]),errStrings.signatureError)
    })

    it("Should return Invalid input if the size of signature is greater than three",()=>{
        assert.equal(tribonacci([1,2,4,3]),errStrings.signatureError)
    })

    it("Should return error when n is negative number",()=>{
        assert.equal(tribonacci([1,2,4],-2),errStrings.nError)
    })

    it("Should return 10 tribonacci numbers from leading 1",()=>{
        assert.deepEqual(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
    })

    it("Should return 10 tribonacci numbers from leading 2 zeros",()=>{
        assert.deepEqual(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
    })

    it("Should work with float number",()=>{
        assert.deepEqual(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
    })
    it("Should return single item if n is 1",()=>{
        assert.deepEqual(tribonacci([1,1,1],1),[1])
    })

    it("Should return empty array when n is zero",()=>{
        assert.deepEqual(tribonacci([ 300, 200, 100 ],0),[])
    })

})