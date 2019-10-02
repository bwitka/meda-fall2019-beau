/********** JAVASCRIPT LOOPS **********/
/* 
Types of loops:
while
do-while
for
forEach()
map()
for…in
for…of
*/

/****** WHILE LOOP *****/

/* syntax: 
while (condition) {
  // code block to be executed
}
*/

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

/****** DO WHILE LOOP *****/

/* syntax:
do {
   *Statement(s);*
} while (*condition*);
*/

let j = 1;

do {
  console.log(`The number is ${j}.`);
  j++;
} while (j <= 5);

/****** FOR LOOP *****/

/*
for (initialization; test condition; iteration statement) {
   < statement(s) to be executed if test condition is true >
}
*/
let colors = ["Red", "Purple", "Green", "Blue", "Black", "Orange", "Violet"];

for (let i = 0; i < colors.length; i++) {
  console.log(`${colors[i]} is my favorite color!`);
}
