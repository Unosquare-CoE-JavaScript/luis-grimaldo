var greeting; // hoisted declaration
greeting = "Hello!"; // the original line 1
console.log(greeting); // Hello!
greeting = "Howdy!"; // `var` is gone!

// Example 2:
studentName = "Suzy";
greeting();
// Hello Suzy!
function greeting() {
  console.log(`Hello ${studentName}!`);
}
var studentName;

// Example 3:

function greeting() {
  console.log(`Hello ${studentName}!`);
}
var studentName;
studentName = "Suzy";
greeting();
// Hello Suzy!