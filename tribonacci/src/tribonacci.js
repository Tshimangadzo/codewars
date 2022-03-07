const errStrings = {
  signatureError: "Invalid signature input",
  nError: "n must be positive",
};

const tribonacci = (signature, n) => {
  if (signature.length < 3) return errStrings.signatureError;
  if (signature.length > 3) return errStrings.signatureError;
  if (n < 0) return errStrings.nError;
  if(n ===1) return [n]
  if(n ===0 ) return []

  const tribonacciList = [...signature];
  const makeSignatureCopy = [...signature];

  for (let i = tribonacciList.length; i < n; i++) {
    const firstSum = makeSignatureCopy.reduce((curr, prev) => curr + prev, 0);
    makeSignatureCopy.push(firstSum);
    tribonacciList.push(firstSum);
    makeSignatureCopy.shift();
  }
  return tribonacciList;
};

console.log(tribonacci([300,200,100],0))

module.exports = { tribonacci, errStrings };
