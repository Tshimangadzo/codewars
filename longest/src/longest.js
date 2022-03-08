const longest = (a, b) => {
  const set = [...new Set(a.concat(b))];
  const setSort =  set.sort()
  return setSort.join('');
};

longest("aretheyhere", "yestheyarehere")
longest("aretheyhere", "yestheyarehere")

module.exports = { longest };
