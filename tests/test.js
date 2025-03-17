import { myName, greeting, greetingLength, favoriteFood, foodSentence, uppercaseGreeting, lowercaseFoodSentence } from '../variablesAndStringsChallenge.js';

// Helper function to check if a variable exists
function isDefined(variable) {
  return typeof variable !== "undefined";
}

describe("🚀 JavaScript Variables & Strings Challenge", () => {
  it("myName should be a non-empty string", () => {
    expect(isDefined(myName)).toBe(true);
    expect(typeof myName).toBe("string");
    expect(myName.length).toBeGreaterThan(0);
  });

  it("greeting should use 'myName' and be correctly formatted", () => {
    expect(isDefined(greeting)).toBe(true);
    expect(typeof greeting).toBe("string");

    // Ensure greeting is exactly "Hello, my name is ___"
    const expectedGreeting = `Hello, my name is ${myName}`;
    expect(greeting).toBe(expectedGreeting);
  });

  it("favoriteFood should be a non-empty string", () => {
    expect(isDefined(favoriteFood)).toBe(true);
    expect(typeof favoriteFood).toBe("string");
    expect(favoriteFood.length).toBeGreaterThan(0);
  });

  it("foodSentence should use 'favoriteFood' correctly", () => {
    expect(isDefined(foodSentence)).toBe(true);
    expect(typeof foodSentence).toBe("string");

    // Ensure sentence format is exact
    const expectedFoodSentence = `My favorite food is ${favoriteFood} and I love eating it!`;
    expect(foodSentence).toBe(expectedFoodSentence);
  });

  it("uppercaseGreeting should store 'greeting' in all uppercase", () => {
    expect(isDefined(uppercaseGreeting)).toBe(true);
    expect(typeof uppercaseGreeting).toBe("string");
    expect(uppercaseGreeting).toBe(greeting.toUpperCase());
  });

  it("lowercaseFoodSentence should store 'foodSentence' in all lowercase", () => {
    expect(isDefined(lowercaseFoodSentence)).toBe(true);
    expect(typeof lowercaseFoodSentence).toBe("string");
    expect(lowercaseFoodSentence).toBe(foodSentence.toLowerCase());
  });
});