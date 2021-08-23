// ACTUAL FUNCTION
const middle = function(array) {
  //...
  let midElm = [];
  const mid = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      return array.slice(mid - 1, mid + 1);
    } else {
      midElm.push(array[mid]);
    }
  }
  return midElm;
};

module.exports = middle;