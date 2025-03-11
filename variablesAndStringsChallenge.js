
// variablesAndStringsChallenge.js

// Challenge 1: Declare/create a variable named `greeting` and assign it the value "Hello, World!".
// Use console.log() to print the value of `greeting`.
let greeting = "Hello, World!";
console.log(greeting);

// Challenge 2: Declare/create a variable named `name` and assign it your name as a string.
// Use console.log() to print the value of `name`.
let name = "Your Name";
console.log(name);

// Challenge 3: Concatenate the `greeting` and `name` variables to create a new string.
// Store the result in a variable named `welcomeMessage` and print it.
let welcomeMessage = greeting + " " + name;
console.log(welcomeMessage);

// Challenge 4: Declare/create a variable named `lowerCaseName` and assign it the value of `name` in lowercase.
// Use the .toLowerCase() method. Print the result.
let lowerCaseName = name.toLowerCase();
console.log(lowerCaseName);

// Challenge 5: Declare/create a variable named `upperCaseName` and assign it the value of `name` in uppercase.
// Use the .toUpperCase() method. Print the result.
let upperCaseName = name.toUpperCase();
console.log(upperCaseName);

// Challenge 6: Declare/create a variable named `nameLength` and assign it the length of the `name` variable.
// Use the .length property. Print the result.
let nameLength = name.length;
console.log(nameLength);

// Challenge 7: Declare/create a variable named `firstLetter` and assign it the first character of the `name` variable.
// Use indexing (e.g., name[0]). Print the result.
let firstLetter = name[0];
console.log(firstLetter);

// Challenge 8: Declare/create a variable named `lastLetter` and assign it the last character of the `name` variable.
// Use indexing and the .length property. Print the result.
let lastLetter = name[name.length - 1];
console.log(lastLetter);

// Challenge 9: Declare/create a variable named `substringName` and assign it a substring of `name` that includes the first 3 characters.
// Use the .substring() method. Print the result.
let substringName = name.substring(0, 3);
console.log(substringName);

// Challenge 10: Declare/create a variable named `replacedName` and assign it the value of `name` with all occurrences of the letter "a" replaced with "z".
// Use the .replace() method. Print the result.
let replacedName = name.replace(/a/g, "z");
console.log(replacedName);