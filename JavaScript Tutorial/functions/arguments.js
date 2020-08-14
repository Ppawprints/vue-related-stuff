// multiple arguments
/* let add = function (num1, num2, num3) {
    return num1 + num2 + num3
}
console.log(add(2,91, -1)) 

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}.`
}
console.log(getScoreText(undefined, 1))
*/
// challenge: tip calculator

let tipCalculator = function (total, tipPercent = 0.2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}.`
}
console.log(tipCalculator(660))