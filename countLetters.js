const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const results = {};
  for (const letter of sentence.trim().split('')) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
assertEqual(result1['s'], 2);

module.exports = countLetters;