# Hardcore Functional Programming in Javascript, v2

## What is it?

Is proggraming with funtions

## Function - Mathematical

A single-value collection of pairs.
Every value of a domain corresponds one of a range.

### Kind of functions

#### Total

For every input corresponds and output.

```sh
function inc(i){
        if(i === 0) return 1
        if(i === 1) return 2
        if(i === 2) return 3
}
```

#### Deterministic

Always receive the same output for a given input

```sh
const timeSince = comment => {
    const now = new Date()
    const then = new Date(comment.createdAt)
    return getDifference(now, then )
}

const getDifference = (now, then) => {
    const days = Math.abs(now.getDate() - then.getDate())
    const hours = Math.abs(now.getHours() - then.getHours())
    return (days, hours)
}
```

#### No-Observable Side-Effects

No observable effect besides computing a value

```sh
const add = (x,y) => {
        console.log(`Ading ${x} ${y}`)
        return x + y
}

const add = (x,y) => {
        return {result: x+y, log: `Adding ${x} ${y}`}
}
```

#### Advantage of pure functions

- Reliable
- Portable
- Reusable
- Testable
- Composable
- Properties/Contract

## Currying

Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

### Why should I use currying?

There are several reasons why currying is ideal:

- Currying is a checking method to make sure that you get everything you need before you proceed
- It helps you to avoid passing the same variable again and again
- It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
- It is used in functional programming to create a higher-order function
- This could be personal preference, but I love that it makes my code readable

### How does currying work?

Currying is a function that accepts multiple arguments. It will transform this function into a series of functions, where every little function will accept one argument:

```sh
Noncurried version//
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(2, 3, 5)) // 10

Curried version//
const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10
```

There is a link about how curriyng works <https://blog.logrocket.com/understanding-javascript-currying/#:~:text=What%20is%20currying%20in%20JavaScript,functions%20with%20a%20single%20argument.>

## Composition

Chaining multiple functions together to create a new function.

```sh
const add = (x, y) => x + y
const toUpper = str => str.toUpperCase()
const exclaim = str => str + '!'
const first = xs => xs[0]
// composition e.g
const compose = (f,g) => x => f(g(x))
const shout = compose(exclaim, toUpper)

console.log(shot('tears'))
```

Explanation: In this example, the compose function return another function which means we can re-use functions.

```sh
//add more composition
const shout = compose(first, compose(exclaim, toUpper))

// You can use compose from randa package but in this case compose is from right to left

//example with composition
const doStuff = _.compose(
    join(''),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase()
)
// example without composition
const doStuff = str => 
    str
    .toLowerCase().split(' ')
    .map(c => c.trim())
    .reverse()
    .filter(x => x.length > 3)
    .join('')
```

## Functors

Functors are a mapping using a function f(x) (or composite function f(g(x)) for instance) on a category A generating a category B, creating a new image, respecting the morphism. In other words, is any object we can map and apply a function generating another object instance of the same type and connections.

Let’s check an example:

```sh
[1, 2, 3].map(val => val * 2); //generates [2, 4, 6]
```

So, we can see that Array is a functor, because it respects the same type (results in other Array instance) and the connections too (have the same number of items).

## Either Monad

- Either monad allows us to control errors on dot chain operations by bubbling the error until fold method is called,
- As we are now throwing exception on the methods it makes them safer
- It can be used also on other situations to branch our code kind of like a if statement

Example on implementation of Either monad, it needs 2 identity factor and one of them "Left" when returned following chained process are not run until.

```sh
const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: `Right(${x})`,
});

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: `Left(${x})`,
});

const findColor = (name) => {
  const found = { red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name];
  return found ? Right(found) : Left("missing");
};

const res = () =>
  findColor("red")
    .map((x) => x.toUpperCase())
    .map((x) => x.slice(1))
    .fold(
      () => "No color!",
      (color) => color
    );

console.log(res());
```

### From Nullable

You can make a little function to check if value is null return Left Functor it allow to simplify our code

```sh
const fromNullable = (x) => (x != null ? Right(x) : Left());

const findColor = (name) =>
  fromNullable({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);
```

## Task

### Task Monad

It is basically as Promise, but with the difference that you actually has to know if you are going to return another task to chain them

```sh

import { Task } from "types";

const t1 = Task((reJ, res) => res(2))
  .chain((two) => Task.of(two + 1))
  .map((three) => three * 2);

t1.fork(console.error, console.log);

Refactoring Node IO with Task
we could refactor the app to pass from this:

const app_ = () =>
  fs.readFile("config.json", "utf-8", (err, contents) => {
    console.log(err, contents);
    if (err) throw err;

    const newContents = contents.replace(/3/g, "6");

    fs.writeFile("config1.json", newContents, (err, _) => {
      if (err) throw err;
      console.log("success!");
    });
  });
```

To this:

```sh
const readFile = (path, enc) =>
  Task((rej, res) =>
    fs.readFile(path, enc, (err, contents) => (err ? rej(err) : res(contents)))
  );

const writeFile = (path, contents) =>
  Task((rej, res) =>
    fs.writeFile(path, contents, (err, contents) =>
      err ? rej(err) : res(contents)
    )
  );

  const app = () =>
  readFile("config.json", "utf-8")
    .map((contents) => contents.replace(/3/g, "6"))
    .chain((newContent) => writeFile("config1.json", newContent));
```

### Task Practices

if you don't want to use the typical constructor for Task:

```sh
const t = Task((rej, res) => res(2))
you can initialized a Task with a minimal context as it is call like this:

const t = Task.of(2)
it is equivalent, this is also called a appointed functor
```

### Transform & Monad Patterns

If you need to transforms a [Task, Task] into Task[] or traverse other king of types you can use a method called Traverse on the lib of 'immutable-ext'

it is basically ty flip types around

```sh
List([graterThan5, looksLikeEmail]).traverse(Either.of, v => (email))
```

Example:

```sh
const greaterThan5 = (x) =>
  x.length > 5 ? Right(x) : Left("not greater than 5");

const looksLikeEmail = (x) =>
  x.match(/@/gi) ? Right(x) : Left("not an email");

const email = "blahh@yadda.com";
const res = List([greaterThan5, looksLikeEmail]).traverse(Either.of, (v) =>
  v(email)
);

res.fold(console.log, (x) => console.log(x.toJS()));
```

Or a more real case application when flipping out the types makes sense to flat them out:

```sh
Either.of(List.of(4)).chain((xs) => Either.of(3));
// Either (List(Either))
// Either (Either(List))
// Either (List)
```

### Natural Transformation

Example to change an either type to a Task type in order to be a natural transformation you don't have to touch the value just flip the type

```sh
const eitherToTask = e =>
e.fold(Task.rejected, Task.of)
```

Example on manipulating types can make things simpler

From

```sh
Db.find(1)
  .chain(eu =>
    eu.fold(
      e => Task.of(eu),
      u => Db.find(u.best_friend_id)
    )
  )
  .fork(
    error => send(500, { error }),
    eu =>
      eu.fold(
        error => send(404, { error }),
        x => send(200, x)
      )
  );
```

To

```sh
Db.find(3)
  .chain(eitherToTask)
  .chain(u => Db.find(u.best_friend_id))
  .chain(eitherToTask)
  .fork(error => send(500, { error }),
    u => send(200, u))
```
