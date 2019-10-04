// DO/WHILE LOOP:
let counter = 0;
let continueLoop = true;

do {
  // console.log(`Loop number for DO/WHILE LOOP: ${counter}`);

  counter += 1;

  if (counter > 10) {
    continueLoop = false;
  }
} while (continueLoop);

// SAME PROCEDURE WITH FOR LOOP:

for (let i = 0; i < 10; i++) {
  // console.log(`Loop number for FOR LOOP: ${i}`);
}

for (let i = 0; i < 90; i += 2) {
  console.log(`Hello, this is loop number ${i}.`);
}
