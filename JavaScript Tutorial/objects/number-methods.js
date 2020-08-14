/*let num = 43.9988

console.log(num.toFixed(3))

console.log(Math.ceil(num))

let min = 11
let max = 33
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
*/

// Challenge

let makeGuess = function(guess, min, max) {
    return guess === (Math.floor(Math.random() * (max - min + 1)) + min)
}

console.log(makeGuess(3, 1, 5))