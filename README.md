# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @suraj_nair/lotide`

**Require it:**

`const _ = require('@suraj_nair/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArrayEqual)`: performs an assertion of arrays to determine if they are equal.
* `function2(assertEqual)`: performs an assertion of two values to determine if they're equal
* `function3(assertObjectsEqual)`: performs an assertion to determine if two objects are equal
* `function4(countLetters)`: counts individual letters and displays totals of each
* `function5(countOnly)`: performs a search for given names and tallies each occurance of given names in an array
* `function6(eqArrays)`: determines if arrays are equal in their value
* `function7(eqObjects)`: determines if objects are equal in their value
* `function8(findKey)`: performs a search for a given value of an object key nested inside of another object and returns it's parent key
* `function9(findKeyByValue)`: scans object for a value and displays a genre based on whether the given show matches the genre.
* `function10(head)`: displays first object of array
* `function11(letterPositions)`: determines where a given letter occurs in a string
* `function12(map)`: shows character total value of a given string in an array. will individually print values of each string in array.
* `function13(middle)`: will display undefined if array is 1 or 2 index long. will display middle 1 value if array is odd length. will display 2 center values if array is even length.
* `function14(tail)`: removes first item of array and displays remaining values in a new array
* `function15(takeUntil)`: scans an array until it reaches the given value and displays data until reaching said value.
* `function16(without)`: will return a subset of a given array, removing unwanted elements