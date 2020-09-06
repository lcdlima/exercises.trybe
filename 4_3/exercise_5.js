// Create a function that takes a string and returns true if it is a palindrome or false if it is not.
// Example of a palindrome: arara.
// checksPalindrome ("arara");
// Expected return: true
// checksPalindrome ("development");
// Expected return: false

function invertedString (word) {
    let invertedString = word.split("").reverse().join("");
    return invertedString;
}

function verifyPalindrome (word) {
    word = word.toLowerCase();
    let inversion = invertedString(word);
    if (inversion == word) {
        return true;
    } else {
        return false;
    }
}

console.log (verifyPalindrome("arara"));

