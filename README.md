# JavaScript Functions

<details>
<summary>Table of contents</summary>

- [Functions](#functions)
  - [Hoisting](#hoisting)
  - [This-scope](#this-scope)
- [Anonymous functions](#anonymous-functions)
- [Functions with arguments](#functions-with-arguments)
- [Functions with return value](#functions-with-return-value)
- [Functions with both arguments and a return value](#functions-with-both-arguments-and-a-return-value)
- [Arrow functions](#arrow-functions)
- [Callback functions](#callback-functions)

</details>

### Functions

Functions are powerful and versatile tools that play a crucial role in structuring code and promoting reusability. They containt a set of instructions allowing for a more modular approach to programming.

A basic syntax looks like this:

```js
function greeting() {
  // ...inside the code block is the code that belongs to the function.

  console.log("Hello there!");
}
```

We need the keyword `function`, a function name, parenthesis _(which we will use later)_ and a code block with the code.

The example above just creates the function and saves it. It doesn't actually runs it. We need to invoke _(call)_ if before it runs.

To run a function we invoke we referencing its name along with parenthesis.

```js
// This is an invocation.
greeting();
```

[Back to top](#javascript-functions)

#### Hoisting

JavaScript hoists functions _(like the one example above)_ to the top of the scope during the compiliation phase. This behaviour anables us to use the functions before they are explicitly declared. Use this with catuion as it may lead to unexpected results if not understood properly. Not all functions are hoisted to the top. Only the ones that are created like the one above, like this:

```js
// These functions will be hoisted.
function functionName() {
  // ...code
}
```

Proper useage of hoisting can lead to cleaner and more readable code.

#### This-scope

The `this` keyword in JavaScript refers to the current execution context. Understanding how `this` behaves in different scenarios is crucial for writing maintainable and resuable code. In functions, `this` can vary based on how the functions is invoked, prodviding a powerful mechanism for dynamic context binding.

```js
function showThis() {
  console.log(this);
}
```

- `this` in a regular function refers to the global object (e.g, `window` in a browser) or `undefined` in strict mode.

- In a object method, `this` refers to the object it self that the method was called on.
- Arrow functions do not have their own `this` context. They always inherit it from the surrounding scope.

[Back to top](#javascript-functions)

### Anonymous functions

Anonymous functions, without a specified name, offer a concise way to define functions on-the-fly. They are particularly useful for short, one-time use cases and can be passed directly as arguments to other functions.

This is the syntac for a anonymous function:

```js
const greeting = function () {
  console.log("Hello, how are you doing?");
};
```

These kind of functions won't be hoisted like regular functions.

- Anonymous function are often used in scenarios where a functions is needed temporarily and might not be reused.

- They can contribute to code readability.

[Back to top](#javascript-functions)

### Functions with arguments

### Functions with return value

### Functions with both arguments and a return value

### Arrow functions

### Callback functions
