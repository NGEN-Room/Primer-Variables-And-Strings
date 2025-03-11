// test.js
const { greeting, name, welcomeMessage, lowerCaseName, upperCaseName, nameLength, firstLetter, lastLetter, substringName, replacedName } = require('./variablesAndStringsChallenge');

test('Challenge 1: greeting should be "Hello, World!"', () => {
  expect(greeting).toBe("Hello, World!");
});

test('Challenge 2: name should be your name', () => {
  expect(name).toBe("Your Name"); // Replace "Your Name" with the expected name
});

test('Challenge 3: welcomeMessage should combine greeting and name', () => {
  expect(welcomeMessage).toBe("Hello, World! Your Name");
});

test('Challenge 4: lowerCaseName should be name in lowercase', () => {
  expect(lowerCaseName).toBe("your name"); // Replace with the expected lowercase name
});

test('Challenge 5: upperCaseName should be name in uppercase', () => {
  expect(upperCaseName).toBe("YOUR NAME"); // Replace with the expected uppercase name
});

test('Challenge 6: nameLength should be the length of name', () => {
  expect(nameLength).toBe(8); // Replace with the expected length
});

test('Challenge 7: firstLetter should be the first character of name', () => {
  expect(firstLetter).toBe("Y"); // Replace with the expected first letter
});

test('Challenge 8: lastLetter should be the last character of name', () => {
  expect(lastLetter).toBe("e"); // Replace with the expected last letter
});

test('Challenge 9: substringName should be the first 3 characters of name', () => {
  expect(substringName).toBe("You"); // Replace with the expected substring
});

test('Challenge 10: replacedName should replace "a" with "z"', () => {
  expect(replacedName).toBe("Your Nzme"); // Replace with the expected replaced string
});