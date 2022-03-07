const longest = (a, b) => {
  const aSet = [...new Set(a)];
  const bSet = [...new Set(b)];
  const aSort =  aSet.sort()
  const bSort =  bSet.sort()
  return aSort.length > bSort.length?aSort.join(''):bSort.join('');
};

longest("aretheyhere", "yestheyarehere")

module.exports = { longest };
