function letterCount(text, letter) {
  if (text == undefined || letter == undefined) {
    console.log(
      "This function call is missing an argument to fully run. Stopping function execution now..."
    );
    return;
  }

  var stringToTest = text.toLowerCase();
  var i = 0;
  var count = 0;
  var loopContinue = true;
  var lengthOfString = stringToTest.length;
  var characterToCheck = letter.toLowerCase();

  do {
    var character = stringToTest.charAt(i);
    i = i + 1;

    if (character == characterToCheck) {
      count += 1;
    }

    if (i >= lengthOfString) {
      loopContinue = false;
    }
  } while (loopContinue); // here loopContinue represents the value 'true'.

  console.log(`The string we are testing is: ${stringToTest}`);
  console.log(`The string has a total length of ${lengthOfString} characters.`);
  console.log(
    `We have found a total of ${count} for the letter ${characterToCheck}.`
  );
}

letterCount();
