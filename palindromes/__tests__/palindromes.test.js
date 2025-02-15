const { isPalindrome } = require("../palindromes");

describe("Verify isPalindrome correctly detects palindromes", () => {
    test("An all letters palindrome is correctly detected", () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test("An all letters, non palindrome is correctly detected", () => {
        expect(isPalindrome('sponge')).toBe(false);
    });

    test("A pallindrome with spaces is correctly detected", () => {
        expect(isPalindrome("taco cat")).toBe(true);
    });

    test("A non palindrome with spaces is correctly detected", () => { 
        expect(isPalindrome("not a palindrome")).toBe(false);
    })

    test("A palindrome with punctuation is correctly detected", () => {
        expect(isPalindrome("Madam, I'm Adam")).toBe(true); 
    });

    test("A non palindrome with punctuation is correctly detected", () => {
        expect(isPalindrome("Is this a palindrome? No")).toBe(false);
    });
   
})