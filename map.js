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

const map = (array, callback) => {
    
  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;

};

const words = ["ground", "control", "to", "major", "tom"];
const phone = ['222', '333', '444', '666'];
const location = ["Toronto", "Ottawa", "Vancouver", "Halifax"];

//const results1 = map(words, word => word[0]);
//console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
assertArraysEqual(map(phone, word => word[0]), ['2','3','4','6']);
assertArraysEqual(map(location, word => word[0]), ['T','O','V','H']);

module.exports = map;

