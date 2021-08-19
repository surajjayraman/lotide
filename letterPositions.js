const assertEqual = function(actual, expected) {
  if (actual === expected) {
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
console.log(result1);