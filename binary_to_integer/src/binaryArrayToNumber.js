const binaryArrayToNumber = (arr) => {
  let power = arr.length - 1;
  const base = 2;
  const storeMultResults = [];
  for (let i = 0; i < arr.length; i++) {
    storeMultResults.push(Math.pow(base, power) * arr[i]);
    power -= 1;
  }
  return storeMultResults.reduce((curr, prev) => curr + prev, 0);
};

module.exports = { binaryArrayToNumber };
