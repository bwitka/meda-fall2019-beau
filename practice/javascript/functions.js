/* 
function syntax: 

function name(parameters){
  statements
}

<function keyword> <function name>(<optional parameters>) {
    <function body>
}
*/

// function myFunction() {
//   console.log("This is line 1.");
//   console.log("This is line 2.");
//   console.log("This is line 3.");
// }

// myFunction();

function doSomeMath(a, b) {
  let sum = a + b;
  let sumSentence = `${a} plus ${b} is ${sum}!`;
  console.log(`${sumSentence}`);

  let difference = a - b;
  let differenceSentence = `${a} minus ${b} is ${difference}!`;
  console.log(`${differenceSentence}`);

  let product = a * b;
  let productSentence = `${a} times ${b} is ${product}!`;
  console.log(`${productSentence}`);

  let quotient = a / b;
  let quotientSentence = `${a} divided by ${b} is ${quotient.toFixed(1)}!`;
  console.log(`${quotientSentence}`);
}

// calling / invoking the function:
console.log("=========================");
doSomeMath(12, 9);
console.log("=========================");
doSomeMath(139, 40);
console.log("=========================");
doSomeMath(3, 80);
console.log("=========================");
