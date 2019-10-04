let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

/********* Array methods/functions *********/

// Add an element to the end of the array:
// daysOfTheWeek.push("Superday");

// Remove an element from the end of the array:
// daysOfTheWeek.pop();

// Add element to start of the array:
// daysOfTheWeek.unshift("Funday");

// Remove element from start of array:
// daysOfTheWeek.shift();

// Push an element into middle of array:
// daysOfTheWeek.splice(4, 0, "Middleday");

const day = daysOfTheWeek.pop();
daysOfTheWeek.unshift(day);

// one line version = daysOfTheWeek.unshift(daysOfTheWeek.pop());

console.log(daysOfTheWeek);
