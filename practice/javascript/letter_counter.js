// Create a string to play with, a counter (i), a condition to stop the loop (loopContinue), and a variable to hold the the number of characters of the string (lengthOfString)
var stringToTest =
  "This has to be a really long sentence so we have a chance to count a character twice.";
var i = 0;
var count = 0;
var loopContinue = true;
var lengthOfString = stringToTest.length;

var characterToCheck = "s";

"hello".length;

Math.random();

do {
  // Pull a character based on the current loop number (i) using the charAt function.
  var character = stringToTest.charAt(i);
  //   console.log(
  //     `Grab character at index ${i} and then store the letter ${stringToTest.charAt(
  //       i
  //     )} inside of character variable.`
  //   );

  // Add a 1 to the counter (i).
  i = i + 1;
  //   console.log(`The loop counter was updated to ${i}.`);

  // Console log the current value of character.
  // console.log(character);

  // Compare value of character to value of characterToCheck:
  //   if (character == characterToCheck) {
  //     console.log(`We found a match for ${characterToCheck}!`);
  //     count += 1;
  //   }

  // Test to see if the loop is longer than the length of string, and stop the loop if it is.
  if (i >= lengthOfString) {
    loopContinue = false;
  }

  // After running the code check loopContinue to see if we should run this loop again.
} while (loopContinue);

// console.log() some info after the loop ends.
console.log(`The string we are testing is: ${stringToTest}`);
console.log(`The string has a total length of ${lengthOfString} characters.`);
console.log(
  `We have found a total of ${count} for the letter ${characterToCheck}.`
);
