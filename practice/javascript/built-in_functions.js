/***********  BUILT-IN NUMBER FUNCTIONS IN JAVASCRIPT  ***********/

/* The Math.round() function returns the value of a number rounded to the nearest integer.
    Note:
    If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. If it is less than 0.5, the argument is rounded to the integer with the lower absolute value.  If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞.
*/

const someNumber = 34.8;
const results = Math.round(someNumber);
const sentence = `The number ${someNumber} is rounded to ${results}.`;

console.log(sentence);

// Math.ceil() function always rounds a number up to the next largest whole number or integer.
const ceiling = Math.ceil(45.2);
console.log(ceiling);

// Math.floor() function returns the largest integer less than or equal to a given number.
const floor = Math.floor(45.8);
console.log(floor);

// Math.pow() function returns the base to the exponent power, that is, base ^ exponent.
console.log(Math.pow(10, 3));

// Math.sqrt() function returns the square root of a number.
console.log(Math.sqrt(100));

// Generating a random number in JavaScript:

/* 
The Math.random() function is used to return a floating-point pseudo-random number between range [0,1) , 0 (inclusive) and 1 (exclusive).
*/

// Math.random() used with Math.floor() can be used to return random integers.
// Math.floor(Math.random() * 10);  ==>  returns a random integer from 0 to 9
// Math.floor(Math.random() * 11);  ==>  returns a random integer from 0 to 10
// Math.floor(Math.random() * 10) + 1;  ==>  returns a random integer from 1 to 10

let randomNumber = Math.floor(Math.random() * 11); // will generate random number between 1 & 10 (inclusive)
console.log(randomNumber);

/***********  BUILT-IN STRING FUNCTIONS IN JAVASCRIPT  ***********/

/* 
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
*/
console.log(parseInt("1000"));

/* 
The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number (a floating-point number is a number that has a decimal place. They are used when more precision is needed).
*/
console.log(parseFloat("10.890"));

// The charAt() method returns the character at the specified index in a string.
// Note: We start counting index numbers at zero! (i.e the index of the first character is zero)
console.log("Hello, World!".charAt(5));

/*
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/

let myFavoriteFruits = [
  "papaya",
  "mango",
  "kiwi",
  "apple",
  "grape",
  "orange",
  "mandarin",
  "nectarine"
];

console.log(myFavoriteFruits.indexOf("kiwi"));
console.log(myFavoriteFruits.indexOf("pear")); // will return -1 since "pear" is not present in array.

/***********  METHODS  ***********/
// A method is a function that belongs to an object.
// Object.method();

/***********  PROPERTIES  ***********/
// A property is a value stored in an object.
// Object.property

"This is a string".length;
Math.PI;
