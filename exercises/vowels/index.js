// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let result = 0
    let vowels = 'aeiou'
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < vowels.length; k++) {
            if (vowels[k] === str[i].toLowerCase()) {
                result++
            }
        }
    }
    return result
}

module.exports = vowels;
