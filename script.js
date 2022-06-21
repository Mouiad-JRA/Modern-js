'use strict';
// let a = 1, b = 1;
//
// let c = ++a; // 2
// let d = b++; // 1

// let a = 2;
//
// let x = 1 + (a *= 2); // 5
// Fix the addition
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12
// // -->
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);
//
// alert(a + b); // 3

// What will be the result for these expressions?

// 5 > 4 // True
// "apple" > "pineapple" // False a smaller than p
// "2" > "12" // True
// undefined == null // True // null equal to undefined only
// undefined === null // False
// null == "\n0\n" // False
// null === +"\n0\n" // False


// Will alert be shown?
// if ("0") {
//     alert( 'Hello' );
// } //hello

/*

Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
 */

// const coders = prompt('What is the “official” name of JavaScript?');
// if (coders == 'ECMAScript')
//     alert("Right!")
// else
//     alert("You don’t know? ECMAScript!")

// Using if..else, write the code which gets a number via prompt and then shows in alert:
//
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// const value = Numnber(prompt('Enter a number '));
// if (value > 0)
//     alert("1")
// else if (value < 0)
//     alert("-1")
// else
//     alert(0)

// Rewrite this if using the conditional operator '?':
//let result;
//
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// let a , b = 1;
// let result = (a+b < 4) ? 'Below' : 'Over';
//Rewrite if..else using multiple ternary operators '?'.
//
// For readability, it’s recommended to split the code into multiple lines.
// let message;
//
// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

let messages;
messages = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' :(login == '') ? 'No login': '';