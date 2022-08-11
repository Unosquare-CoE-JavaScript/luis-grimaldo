# Understating Typescript 2022

## TypeScript

TypeScript is a super set of JavaScript.
TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.
Once you have the plain JavaScript code, you can deploy it to any environments that JavaScript runs.
TypeScript files use the .ts extension rather than the .js extension of JavaScript files.

## Main advantages of typescript

- Strict typing

Everything stays the way we define it. Need a variable to always be a number? It’ll always be a number, then.

- Structural typing

Indispensable when you care about fully defining the actual structure you use. JavaScript allows for a lot of strange things to be done, so relying on a specific structure is a much safer solution.

- Type annotations

A handy way of saying explicitly what type should be used.

- Type inference
Implicit typing performed by TypeScript itself, so that your developers don’t need to provide types where the compiler can find them on its own.

- Several additional features of TypeScript

TypeScript introduced a great deal of syntax taken from object-oriented programming, including but not limited to:

interfaces,
classes,
enumerated types,
generics,
modules.
It’s true that ECMAScript 6 (or ECMAScript 2015) introduced some of those features to JavaScript—but not all of them. For instance, abstract classes or access modifiers are still nowhere to be found in JavaScript, while TypeScript has them.

And the best part of being a superset of JavaScript? Every new JavaScript feature is also a new TypeScript feature.

### Basic Types

- number: all numbers, no differentiation between integers or floats
- string: with any type of quotes, all text values
- boolean: true and false, no truthy or falsy values
- object: any JS object, more specific types (type of object) are possible
- Array: any JS array, type can be flexible ( any[] ) or strict ( type[] ) (regarding the element types)
- Tuple: added by TS: Fixed-legth array, 'push' is allowed in tuples
- Enum: Added by TS: Automatically enumerated global constat identifiers e.g. enum { NEW, OLD }
- Any: Any kind of value, no specific type assignment. (If possible, don't use it)
- Unknown: More strict than Any. Adopts the typeValue of the value asign to it.
- never: functions can return it. Never returns anything because it crashes or stops the running srcipt.

### Classes TS

Use the class keyword to declare a class in TypeScript. The syntax for the same is given below.

```sh
class class_name {
//class scope
}
```

The class keyword is followed by the class name. The rules for identifiers must be considered while naming a class.

A class definition can include the following −

Fields − A field is any variable declared in a class. Fields represent data pertaining to objects

Constructors − Responsible for allocating memory for the objects of the class

Functions − Functions represent actions an object can take. They are also at times referred to as methods

These components put together are termed as the data members of the class.

### Interfaces TS

Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

An interface is defined with the keyword interface and it can include properties and method declarations using a function or an arrow function.

```sh
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string; 
}
```

- Interface as Type
Interface in TypeScript can be used to define a type and also to implement it in the class.

The following interface IEmployee defines a type of a variable.

```sh
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // OK

let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 
```

more information about interfaces: <https://www.tutorialsteacher.com/typescript/typescript-interface>

### Decorators TS

Decorators are the methods by which we are able to wrap code with another. Essentially like a wrapper. Decorators are a useful design pattern that allows certain specific behavior to be injected into an object/function, either statically or dynamically.

Decorators can be attached to a class declaration, method, accessor, property, or parameter.

Popular frameworks like AngularJS and VueJS use decorators as well!

### Modules And Namespaces

- Modules can contain both code and declarations. Modules also have a dependency on a module loader (such as CommonJs/Require.js) or a runtime which supports ES Modules. Modules provide for better code reuse, stronger isolation and better tooling support for bundling. It is also worth noting that, for Node.js applications, modules are the default and we recommended modules over namespaces in modern code. Starting with ECMAScript 2015, modules are native part of the language, and should be supported by all compliant engine implementations. Thus, for new projects modules would be the recommended code organization mechanism

- Namespaces are a TypeScript-specific way to organize code. Namespaces are simply named JavaScript objects in the global namespace. This makes namespaces a very simple construct to use. Unlike modules, they can span multiple files, and can be concatenated using outFile. Namespaces can be a good way to structure your code in a Web Application, with all dependencies included as script tags in your HTML page. Just like all global namespace pollution, it can be hard to identify component dependencies, especially in a large application.

## WEBPACK

Webpack is a module bundler. Webpack can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community-developed webpack plugins. Sometimes these plugins are used to perform tasks that are usually done outside of webpack, such as cleaning the build directory or deploying the build although you can defer these tasks outside of webpack.

<https://survivejs.com/webpack/what-is-webpack/>

## COMANDS

- npm i --save
- npm i --save-dev
- tsc --watch
- tsc --init
- npm start
