console.log("Hello, World!");

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
