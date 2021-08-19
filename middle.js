const eqArrays = (array1, array2) => {
  return (array1.length === array2.length) && array1.every(function(element, index) {
    return element === array2[index];
  });
};
  
// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
