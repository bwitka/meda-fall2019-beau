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
  console.log(`${a} plus ${b} is ${a + b}!`);
  console.log(`${a} minus ${b} is ${a - b}!`);
  console.log(`${a} times ${b} is ${a * b}!`);
  console.log(`${a} divided by ${b} is ${(a / b).toFixed(1)}!`);
}

// calling / invoking the function:
doSomeMath(12, 9);
