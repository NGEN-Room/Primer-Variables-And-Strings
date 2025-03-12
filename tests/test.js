const { expect } = require("chai");
const challenge = require("../variablesAndStringsChallenge");

// Helper function to check if a variable exists
function isDefined(variable) {
  return typeof variable !== "undefined";
}

describe("\n🚀 JavaScript Variables & Strings Challenge", () => {
  
  it("myName should be a non-empty string", () => {
    expect(isDefined(challenge.myName), "❌ myName is not defined!").to.be.true;
    expect(challenge.myName, "❌ myName should be a string!").to.be.a("string").and.not.to.be.empty;
  });

  it("greeting should use 'myName' and be correctly formatted", () => {
    expect(isDefined(challenge.greeting), "❌ greeting is not defined!").to.be.true;
    expect(challenge.greeting, "❌ greeting should be a string!").to.be.a("string");

    // Ensure greeting is exactly "Hello, my name is ___"
    const expectedGreeting = `Hello, my name is ${challenge.myName}`;
    expect(challenge.greeting, `❌ greeting should be: "${expectedGreeting}"`).to.equal(expectedGreeting);
  });


  it("favoriteFood should be a non-empty string", () => {
    expect(isDefined(challenge.favoriteFood), "❌ favoriteFood is not defined!").to.be.true;
    expect(challenge.favoriteFood, "❌ favoriteFood should be a string!").to.be.a("string").and.not.to.be.empty;
  });

  it("foodSentence should use 'favoriteFood' correctly", () => {
    expect(isDefined(challenge.foodSentence), "❌ foodSentence is not defined!").to.be.true;
    expect(challenge.foodSentence, "❌ foodSentence should be a string!").to.be.a("string");

    // Ensure sentence format is exact
    const expectedFoodSentence = `My favorite food is ${challenge.favoriteFood} and I love eating it!`;
    expect(challenge.foodSentence, `❌ foodSentence should be: "${expectedFoodSentence}"`).to.equal(expectedFoodSentence);
  });

  it("uppercaseGreeting should store 'greeting' in all uppercase", () => {
    expect(isDefined(challenge.uppercaseGreeting), "❌ uppercaseGreeting is not defined!").to.be.true;
    expect(challenge.uppercaseGreeting, "❌ uppercaseGreeting should be a string!").to.be.a("string");
    expect(challenge.uppercaseGreeting, "❌ uppercaseGreeting should be in ALL CAPS!").to.equal(challenge.greeting.toUpperCase());
  });

  it("lowercaseFoodSentence should store 'foodSentence' in all lowercase", () => {
    expect(isDefined(challenge.lowercaseFoodSentence), "❌ lowercaseFoodSentence is not defined!").to.be.true;
    expect(challenge.lowercaseFoodSentence, "❌ lowercaseFoodSentence should be a string!").to.be.a("string");
    expect(challenge.lowercaseFoodSentence, "❌ lowercaseFoodSentence should be in all lowercase!").to.equal(challenge.foodSentence.toLowerCase());
  });

});