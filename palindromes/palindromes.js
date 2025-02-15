/**
 * Write a function what checks if the provided string is 
 * the same forwards as it is backwards

    Ignore spacing and punctuation
 */

function isPalindrome(text) {
    //1. Remove all spaces and punctuation from the text
    //2. Check if the word is the same backwards and forwards 
    //3. Profit?

    const cleanedText = text.toLowerCase().replace(/\W/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');
    
}

module.exports = {
    isPalindrome,
}