/************************************/

function myFunction() {
  const greeting = "Hello, World!";
  return greeting;
}

console.log(myFunction());

/************************************/

function addTwoNumbers(a, b) {
  return a + b;
}

console.log(addTwoNumbers(2, 2));
console.log(`2 plus 2 is equal to ${addTwoNumbers(2, 2)}.`);

/************************************/

function simpleGreeting(name) {
  return `Hello ${name}, how are you?`;
}

console.log(simpleGreeting("Beau"));

/************************************/

function equalValue(a, b) {
  if (a == b) {
    return true;
  } else if (a != b) {
    return false;
  }
}

console.log(equalValue(2, 4));
console.log(equalValue(4, 4));

/************************************/
// Data flow using a built-in function.

const sampleNumber = 22000;

// Provide data to the Math.round() function using sampleNumber as an argument.
Math.round(sampleNumber);

// Creating our own custom Math.round() function:

/*
Use modulo and 1 to isolate number's decimal value:
console.log( <exampleNumber> % 1 );
*/

function ourOwnRound(someNumber) {
  let result;
  let decimalValue = someNumber % 1;

  if (decimalValue >= 0.5) {
    result = Math.ceil(someNumber);
  } else {
    result = Math.floor(someNumber);
  }

  return result;
}

console.log(ourOwnRound(63.298));
