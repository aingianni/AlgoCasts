// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let oddNum = 1
    let whiteSpace = n-1
    for (let i = 1; i <= n; i ++) {
        let result = ''
        for (let i = 0; i < whiteSpace; i++) {
            result += ' '
        }
        for (let i = 0; i < oddNum; i++) {
            result += '#'
        }
        for (let i = 0; i < whiteSpace; i++) {
            result += ' '
        }
        console.log(result)
        oddNum += 2
        whiteSpace--
    }
}

module.exports = pyramid;
