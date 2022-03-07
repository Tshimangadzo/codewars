const sumTwoSmallestNumbers = (numbers) => {
 const sortNumbers =numbers.sort((a,b)=>a-b)
 return sortNumbers[0]+sortNumbers[1]
};

module.exports = {sumTwoSmallestNumbers}
