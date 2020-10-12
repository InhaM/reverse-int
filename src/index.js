module.exports = function reverse (n) {
  return +Array.from(n.toString()).reverse().join();
}
