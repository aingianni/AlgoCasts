// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const strArr = str.split(' ')
    let result = ''
    
    strArr.forEach(word => {
        let firstLetter = word.substring(0, 1)
        let wordReplaceLetter = word.replace(firstLetter, firstLetter.toUpperCase())
        result += `${wordReplaceLetter} `
    })
  
    return result.trim()
}

module.exports = capitalize;
