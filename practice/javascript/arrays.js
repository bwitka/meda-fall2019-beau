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

// move last element to beginning of array by storing its contents in a variable.
// const day = daysOfTheWeek.pop();
// daysOfTheWeek.unshift(day);
// // one line version => daysOfTheWeek.unshift(daysOfTheWeek.pop());

/*
Slice() and Splice() methods:
The slice() method returns the selected elements in an array, as a new array object.
The splice() method adds/removes items to/from an array, and returns the removed item(s).
Note: Slice() will not alter original array, however Splice() will change the original array.
*/
// daysOfTheWeek.splice(4, 2);

console.log(daysOfTheWeek);

// Iterating through an array with a FOR loop:

for (let i = 0; i < daysOfTheWeek.length; i++) {
  console.log(`Today is ${daysOfTheWeek[i]}.`);
}
