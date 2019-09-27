/*************** CONDITIONAL STATEMENTS ***************/

// IF/ELSE IF/ELSE practice:

let age = Math.floor(Math.random() * 100 + 1);

console.log(`Your age is ${age}.`);

if (age == 0) {
  console.log("Congrats, you were just born. Life is hard, good luck!");
} else if (age >= 1 && age <= 5) {
  console.log("Congrats, you survived this long. You are now a toddler.");
} else if (age >= 5 && age <= 13) {
  console.log("You are now a child!");
} else if (age >= 13 && age <= 18) {
  console.log("You are now a teenager!");
} else if (age >= 18 && age <= 26) {
  console.log("Young adult!");
} else if (age >= 26 && age <= 65) {
  console.log("Welcome to adulthood!");
} else if (age >= 65) {
  console.log("You are now an elder!");
} else {
  console.log("We don't know what age group you belong to...");
}

/*************** LOGICAL OPERATORS ***************/

// OR operator => ||
// Returns true if at least one of the operands is true
if (false || false) {
  console.log("Either was true.");
}

// AND operator => &&
// Returns true if both operands are true
if (true && false) {
  console.log("Both are true.");
}

// NOT operator => !
// Invert the value of a boolean

// Combining operators:
if ((true && true) || (false && true)) {
  console.log("Condition evaluates to true!");
}

/*************** TRUTHY AND FALSY ***************/

// falsy values:
false;
0;
("");
undefined;
null;
NaN;

// truthy values: all values are truthy unless they are defined as falsy.

/*************** END OF WEEK RECAP: what we covered ***************/
/*
variables
data types
conditional statements
comparison operators
logical operators
truthy & falsy values
*/
