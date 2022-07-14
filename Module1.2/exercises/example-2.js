greeting();
// TypeError
var greeting = function greeting() {
  console.log("Hello!");
};

//Let’s look at another example of variable hoisting:
greeting = "Hello!";
console.log(greeting);
// Hello!
var greeting = "Howdy!";

/*Though greeting isn’t declared until line 5,
it’s available to
be assigned to as early as line 1. Why ?
    
There’s two necessary parts to the explanation:
• the identifier is hoisted,
• and it’s automatically initialized 
to the value undefined
from the top of the scope.*/