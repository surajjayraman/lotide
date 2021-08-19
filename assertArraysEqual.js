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
  
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
  
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
  
  