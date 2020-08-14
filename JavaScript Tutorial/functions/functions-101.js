/*
let greetUser = function() {
    console.log('Welcome user!')
}

// greetUser()

let square = function (num) {
    let result = num * num
    return result
}

console.log(square(3))
*/

let temperatureConvertor = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let celcius = temperatureConvertor(68)

console.log(celcius)