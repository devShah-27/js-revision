const accountId = 4265; // Cannot change the value once assigned.
let accountEmail = "dev.shah@gmail.com"; // mitigates the scoping problem with JS variables.
var password = "helloWorld123"; // var was dropped from usage because it did not respect scoping of variables.
accountCity = "Ahmedabad"; 
let accountState; // variable is declared but not initialized (undefined);

// accountId = 3; // Throws a runtime error.

accountEmail = "devShah@gmail.com";
password = "HelloWorld1234";
accountCity = "Bhavnagar";

// console.log(accountId);

console.table([accountId, accountEmail, password, accountCity,accountState]);