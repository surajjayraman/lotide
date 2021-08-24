
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

const letterPositions = function(sentence) {
  const results = {};
  const arrStr = sentence.trim().split('');
    
  // logic to update results here
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] !== ' ') {
      if (results[arrStr[i]]) {
        results[arrStr[i]].push(i);
      } else {
        results[arrStr[i]] = [i];
      }
    }
  }
    
  return results;
};

const result1 = letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

module.exports = letterPositions;