// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let firstString = (stringA.toLowerCase().match(/[a-z]/g) || []).sort().join("");
  let secondString = (stringB.toLowerCase().match(/[a-z]/g) || []).sort().join("");

  return firstString === secondString;
}

// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

module.exports = anagrams;
