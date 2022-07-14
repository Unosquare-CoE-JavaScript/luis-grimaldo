# IDWJY: Scope & Clousures

Javascript is divided in two phases. (compilation/execution).
Dont use with and eval because this sentences get worst the rendiment.
Don´t change variables in execution time.

Compiled vs Interpreted *****************************************************************
A compiled language is converted into machine code so that the processor can execute it.
An interpreted language is a language in which the implementations execute instructions
directly without earlier compiling a program into machine language. The compiled programs
run faster than interpreted programs.
<https://www.freecodecamp.org/news/compiled-versus-interpreted-languages#:~:text=Compilers%20and%20interpreters%20take%20human,translated%20by%20the%20target%20machine>.

The members of the JS engine that will have conversations as they process our program:
•Engine: responsible for start-to-finish compilation and execution of our JavaScript
program.
•Compiler: one of Engine’s friends; handles all the dirty work of parsing and
code-generation.
•Scope Manager: another friend of Engine; collects and maintains a lookup list of all the
declared variables/i-dentifiers, and enforces a set of rules as to how these
areaccessible to currently executing code.
For you to fully understand how JavaScript works, you need to begin to think like Engine
(and friends) think, ask the questions they ask, and answer their questions likewise.

Scope ***********************************************************************************
The scope of a variable refers to where it will live, or be accessible.

We could also say that scope is the scope that determines the accessibility of the
variables in each part of our code. Understanding the concept of scope well will help us
increase the level of security since it defines who has access and who does not to
certain parts of our code, it will also make it easier for us to detect and reduce errors,
therefore our code will be more robust.
<https://somospnt.com/blog/120-scope-en-javascript#:~:text=El%20scope%20de%20una%20variable,cada%20parte%20de%20nuestro%20c%C3%B3digo.>

When a function (declaration or expression) is defined, a new scope is created.
The positioning of scopes nested inside one another creates a natural scope hierarchy
through out the program, called the scope chain. The scope chain controls variable access,
directionally oriented upward and outward.Each new scope offers a clean slate, a space to
hold its ownset of variables. When a variable name is repeated at different levels of the
scope chain, shadowing occurs, which prevents access to the outer variable from that
point inward.As we step back out from these finer details, the next chapter shifts focus
to the primary scope all JS programs include: the global scope.

CommonJS vs ESM ************************************************************************
Today, of all the above, the most common is usually to use CommonJS or ESM.
In ecosystems where the use of NodeJS predominates, it is more common to find the use of
CommonJS, while in more modern systems, browser systems or, for example, Deno,
it is more common to use the ESM approach.

-NodeJS traditionally supports the require syntax of CommonJS, and although it supports
ESM better and better, support is still not complete and it has a large community with
packages using CommonJS through NPM.

-CommonJS only allows synchronous loading of modules, while ESM allows both synchronous
and asynchronous loading.

-NodeJS allows you to require() bare imports using npm while ESM can do it using import
maps, a .json file that includes URL references to bare package names.

-CommonJS requires are not supported directly in the browser, while ESM imports are if
the <script type="module"> attribute is indicated in the scripts that use them.

-CommonJS doesn't allow you to load a module directly from a URL or CDN, while with ESM
you can do it seamlessly and it works directly from a browser.

-With ESM it is possible to do tree-shaking (removal of unused code) out of the box,
while with CommonJS it is not possible, although it can be achieved using third-party
Webpack plugins such as webpack-common-shake.

-CommonJS is used in systems that generate bundles and use preprocessing or transpiling
techniques to generate builds. On the other hand, ESM can be used both in
processed/transpiled environments or directly from the browser, without the need for
transpiling. SkyPack.dev is a project that aims to promote and popularize the use of npm
packages optimized for use without the need for preprocessing tools.

-Deno uses ESM by default, and does not support CommonJS require. However, they can be
supported with a module for Deno of compatibility with Node.

*****************************************************************************************
Chapter 1

What’s the Scope?
The scope is a policy that manages the availability of variables. A variable defined inside a scope is accessible only within that scope, but inaccessible outside. In JavaScript, scopes are created by code blocks, functions, modules.

Runtime Scope Modifications
It should be clear by now that scope is determined as the program is compiled, and should not generally be affected by runtime conditions. However, in non-strict-mode, there are technically still two ways to cheat this rule, modifying a program’s scopes during runtime.

Lexical Scope
A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

*****************************************************************************************
Chapter 2

Illustrating Lexical Scope
Imagine you come across a pile of marbles, and notice that all the marbles are colored red, blue, or green. Let’s sort all the marbles, dropping the red ones into a red bucket, green into a green bucket, and blue into a blue bucket. After sorting, when you later need a green marble, you already know the green bucket is where to go to get it. (Example 1)

Nested Scope
One of the key aspects of lexical scope is that any time an identifier reference cannot be found in the current scope, the next outer scope in the nesting is consulted; that process is repeated until an answer is found or there are no more scopes to consult.

*****************************************************************************************
Chapter 3

The Scope Chain
The scope chain is used to resolve the value of variable names in javascript. Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if there are multiple defined at different scopes. Scope chain in javascript is lexically defined, which means that we can see what the scope chain will be by looking at the code.

note: The scope chain controls variable access, directionally oriented upward and outward.
Arrow Functions =>
The => arrow function doesn’t require the word function to define it. Also, the ( .. ) around the parameter list is optional in some simple cases. Likewise, the { .. } around the function body is optional in some cases. And when the { .. } are omitted, a return value is sent out without using a return keyword.

Note:
Other than being anonymous (and having no declarative form), => arrow functions have the same lexical scope rules as You Don’t Know JS Yet: Scope & Closures

Chapter 3: The Scope Chain 54 function functions do. An arrow function, with or without { .. } around its body, still creates a separate, inner nested bucket of scope. Variable declarations inside this nested scope bucket behave the same as in a function scope.

*****************************************************************************************
Chapter 4

Global Scope definition
A variable is said to be in global scope when it is declared outside of a function or block. We will be able to access these types of variables from any part of our code, either inside or outside a function. The window object is an example of a global scope.

ES Modules (ESM)
ES6 introduced first-class support for the module pattern (covered in Chapter 8). One of the most obvious impacts of using ESM is how it changes the behavior of the observably top-level scope in a file.

*****************************************************************************************
Chapter 5

Hoisting: Declaration vs. Expression
Function hoisting only applies to formal function declara- tions , not to function expression assignments. Consider: (Example2)

hoisting
hoisting being a concrete execution step the JS engine per- forms, it’s more useful to think of hoisting as a visualization of various actions JS takes in setting up the program before execution. The typical assertion of what hoisting means: lifting—like lifting a heavy weight upward—any identifiers all the way to the top of a scope. The explanation often asserted is that the JS engine will actually rewrite that program before execution, so that it looks more like this: (example 3)

*****************************************************************************************
Chapter 6

Scope Exposure
• Naming Collisions: if you use a common and useful variable/function name in two different parts of the program, but the identifier comes from one shared scope (like the global scope), then name collision occurs, and it’s very likely that bugs will occur as one part uses the variable/function in a way the other part doesn’t expect. For example, imagine if all your loops used a single global i index variable, and then it happens that one loop in a function is running during an iteration of a loop from another function, and now the shared i variable gets an unexpected value.

• Unexpected Behavior: if you expose variables/func- tions whose usage is otherwise private to a piece of the program, it allows other developers to use them in ways you didn’t intend, which can violate expected behavior and cause bugs. You Don’t Know JS Yet: Scope & Closures Chapter 6: Limiting Scope Exposure 102 For example, if your part of the program assumes an array contains all numbers, but someone else’s code accesses and modifies the array to include booleans and strings, your code may then misbehave in unexpected ways. Worse, exposure of private details invites those with mal-intent to try to work around limitations you have imposed, to do things with your part of the software that shouldn’t be allowed.

• UnintendedDependency:ifyouexposevariables/func- tions unnecessarily, it invites other developers to use and depend on those otherwise private pieces. While that doesn’t break your program today, it creates a refactoring hazard in the future, because now you can- not as easily refactor that variable or function without potentially breaking other parts of the software that you don’t control. For example, if your code relies on an array of numbers, and you later decide it’s better to use some other data structure instead of an array, you now must take on the liability of adjusting other affected parts of the software.

*****************************************************************************************
Chapter 7

Principal Concept
Closure builds on this approach: for variables we need to use over time, instead of placing them in larger outer scopes, we can encapsulate (more narrowly scope) them but still preserve access from inside functions, for broader use. Functions re- member these referenced scoped variables via closure.

Closure is a behavior of functions and only functions. If you aren’t dealing with a function, closure does not apply. An object cannot have closure, nor does a class have closure (though its functions/methods might). Only functions have closure.

Adding Up Closures
Each instance of the inner addTo(..) function is closing over its own num1 variable (with values 10 and 42, respectively), so those num1’s don’t go away just because adder(..) fin- ishes. When we later invoke one of those inner addTo(..) instances, such as the add10To(15) call, its closed-over num1 variable still exists and still holds the original 10 value. The operation is thus able to perform 10 + 15 and return the answer 25. (Example4)

Observable Definition
We’re now ready to define closure:

Closure is observed when a function uses vari- able(s) from outer scope(s) even while running in a scope where those variable(s) wouldn’t be accessible.
The key parts of this definition are:

• Must be a function involved
• Must reference at least one variable from an outer scope • Must be invoked in a different branch of the scope chain
from the variable(s)

******************************************************************************************Chapter 8

Definition
Encapsulation and Least Exposure (POLE)
Encapsulation is often cited as a principle of object-oriented (OO) programming, but it’s more fundamental and broadly applicable than that. The goal of encapsulation is the bundling or co-location of information (data) and behavior (functions) that together serve a common purpose.

What Is a Module?
A module is a collection of related data and functions (often referred to as methods in this context), characterized by a division between hidden private details and public accessible details, usually called the “public API.”

NOTE:
A module is also stateful: it maintains some information over time, along with functionality to access and update that information.
