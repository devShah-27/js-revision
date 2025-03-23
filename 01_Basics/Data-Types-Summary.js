// ECMAScript Documentation separates data types into 2 parts: Primitive and Non-primitive

// Primitive types, when referenced, give back a copy of the original values rather than the actual memory address.
// There are 7 types of primitives: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// JavaScript is a dynamically typed language. This means the data types are assigned at run-time depending upon the type of value getting stored in them.

const score = 100; // Here, we are not specifying the date type for the variable but it will be initialized as a number.
const isLoggedIn = false; // This will be initialized as a boolean.

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // Prints false even though the values are same.

// Reference types (Non-primitive), when referenced, give back the actual memory reference of the values.
// Arrays, Objects, Functions

const heros = ["Shaktimaan", "Naagraj", "Doga"];
console.log(typeof heros);

const myObj = {
  name: "Dev",
  age: 22,
};
console.log(typeof myObj);

const myFun = function () {
  console.log("Hello World");
};
// console.log(typeof myFun); // Gives "function" but is an Object Function
