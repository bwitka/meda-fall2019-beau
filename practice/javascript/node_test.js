//  this is a single line JS comment.

/*
This is a 
multi-line JS
comment.
*/

console.log("Hello, how are you?");

// console.log() takes a value and passes it to the console.
console.log("Very fine, thank you!");

// ************************************** //

// Basic JavaScript data types:

// String:
("This is a string of characters");
("2000");
("false;");

// Number:
1920;
10000;

// Boolean:
true;
false;

// ************************************** //

// JavaScript variables:

// Declaring a variable with the var statement:
// Syntax = var nameOfVariable;
var message;

// Store a value in the message variable:
message = "This is a message stored inside of a variable!";

// Grab the value of the message variable and send it to the console:
console.log(message);

// Variables can only hold one value at a time; therefore here we are overwriting the previous value of the variable:
message = "This is a new message!";

// Because this console.log() happened after the update, we will get the new value to the console:
console.log(message);

// Creating three new variables with three different data types:
var var1 = "string";
var var2 = 1020;
var var3 = true;

console.log(var1, var2, var3);

// END OF BASIC JAVASCRIPT.
// ************************************** //

// Understanding how values are stored in variables:

var value1 = 100;

var value2 = value1 + 100;

console.log(value2);

// Order of operations for equal sign:
// runs second = runs first;

// Arithmetic operators: + - * / % (% => modulus/remainder)
// note: these operators can only be used on the number data type.

var sum = 30 + 65 + 120 + 2 + 600;
var difference = 100 - 30;
var product = 30 * 80;
var quotient = 300 / 30;
var modulus = 5 % 2;

// The + operator can also be used for concatenation:

var wholeSentence = "My name is" + " " + "Beau" + "!";
console.log(wholeSentence);

// Template literals (introduced in ES6)
console.log(`Hello there. ${wholeSentence}`);

var userName = "Fulanito";
var sentence1 = "Hello there, ";
var sentence2 = ", how are you doing?!";

var completeSentence = `${sentence1}${userName}${sentence2}`;
console.log(completeSentence);

// Using variables to do math on changing data:

var num1 = 100;
var num2 = 40;

var sum1 = num1 + num2;
var difference1 = num2 - num1;

// Order of operations:
// PEMDAS = parenthesis, exponents, multiplication, division, addition, subtraction.

/* 
note: division and multiplication, as well as addition and subtraction, have the same weight.
Therefore, if both exists, you work in order - from left to right.
*/

var someValue = 10 - (36 / 6) * 3;
console.log(someValue);

// Conditional statements: if, else, else if

/*
== both sides are equal
=== strict equality (strictly equal with no type conversion) (equal value and equal type)
>= left side is equal or larger
<= right side is equal or larger
> left side is larger
< right side is larger
!= not equal to
! flip boolean
*/

// if statement:
if (typeof "abc" == "string") {
  console.log("this is true");
}
