// console.log("2" > 1); // prints true
// console.log("02" >= 1); // prints true

console.log(null > 0); // prints false
console.log(null == 0); // prints false

/*
The reason the below statement prints true is that equality check (==) works differently than comparison operators(>, <, >=, and <=). 
Comparisons convert null to number, treating it as 0
*/
console.log(null >= 0); // prints true

// === checks value along with its data type
console.log("2" === 2); // prints false as string and number are different data types.
