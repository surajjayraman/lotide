const assertEqual = require('../assertEqual');
const tail = require('../tail');
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
// no need to capture the return value since we are not checking it
assertEqual(tail(words).length,2);
// original array should still have 3 elements!
assertEqual(words.length, 3);
//Single element and Empty Array checks
assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);