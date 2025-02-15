const { fizzBuzz } = require("../fizzBuzz");

describe("Tests for FizzBuzz", () => {
    test("Verify a number divisible by 3 returns Fizz", () => {
        expect(fizzBuzz(6)).toBe("Fizz");
    });

    test("Verify a number divisible by 5 returnd Buzz", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });

    test("Verify a number divisible by 3 and 5, returns FizzBuzz", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    test("Verify that a number not divisible by 3 or 5, returns the number", () => {
        expect(fizzBuzz(4)).toBe(4);
    });

});