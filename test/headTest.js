const assertEqual = require('../assertEqual');
const head = require('../head');
//Test assertions
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), 5);