// 🚀 JavaScript Variables & Strings Challenge

// 1️⃣ Create a variable labelled `myName` and assign it your name.
const myName = "Your Name"; // Replace "Your Name" with your actual name

// 2️⃣ Create a variable labelled `greeting` that says "Hello, my name is ___" using your `myName` variable.
const greeting = `Hello, my name is ${myName}`;

// 3️⃣ Find the length of `greeting` and store it in a variable labelled `greetingLength`.
const greetingLength = greeting.length;

// 4️⃣ Create a variable `favoriteFood` and assign it a string value.
const favoriteFood = "Pizza"; // Replace "Pizza" with your favorite food

// 5️⃣ Use string concatenation to create a sentence:
// "My favorite food is ___ and I love eating it!"
const foodSentence = `My favorite food is ${favoriteFood} and I love eating it!`;

// 6️⃣ Create a variable `uppercaseGreeting` that stores `greeting` in all uppercase.
const uppercaseGreeting = greeting.toUpperCase();

// 7️⃣ Create a variable `lowercaseFoodSentence` that stores `foodSentence` in all lowercase.
const lowercaseFoodSentence = foodSentence.toLowerCase();

// Export variables for testing (Do not edit this)
export { myName, greeting, greetingLength, favoriteFood, foodSentence, uppercaseGreeting, lowercaseFoodSentence };