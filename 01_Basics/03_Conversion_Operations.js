// ****************************************************************************
//                                 Conversion
// ****************************************************************************

let count = 3;
console.log(typeof count); // prints "number" as its data type
// console.log(typeof(count)); // Another way of writing the same thing

let count_2 = "3";
console.log(typeof count_2);

let number_count_2 = Number(count_2); // guarantees the conversion of count_2 to number type
console.log(typeof number_count_2);

// Now, say a variable has a string instead of a valid number. Then, upon conversion to number, it will give NaN (Not a Number).
let count_3 = "33asdkhg";
let number_count_3 = Number(count_3);
console.log(number_count_3); // Prints NaN

// In case we pass null as an argument for Number conversion, it will spit out 0.
let count_4 = null;
let number_count_4 = Number(count_4);
console.log(number_count_4); // prints 0

// In case we pass an undefined variable as an argument for Number conversion, it will spit out NaN.
let count_5 = undefined;
let number_count_5 = Number(count_5);
console.log(number_count_5); // prints NaN

// In case we pass a boolean variable as an argument for Number conversion, it will spit out 1 for true and 0 for false.
let count_6 = true;
let number_count_6 = Number(count_6);
console.log(number_count_6); // prints 1

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Prints true

let string = "";
let booleanString = Boolean(string);
console.log(booleanString); // prints false

let numberNumber = 45;
let stringNumber = String(numberNumber);
console.log(stringNumber); //prints 33
console.log(typeof stringNumber); // prints "string"

// ****************************************************************************
//                                 Operations
// ****************************************************************************

console.log("1" + 2); // prints out 12
console.log(1 + "2"); // prints out 12
console.log("1" + 2 + 2); // prints out 122
console.log(1 + 2 + "2"); // prints out 32

console.log(true); // prints true
console.log(+true); // prints 1

console.log(+""); // prints 0 because boolean of "" is 0 and + typecasts it to a number
