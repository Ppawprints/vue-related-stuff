// Global: temp1, temperatureConvertor
    // local: fahrenheit, celcius

let temperatureConvertor = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let temp1 = temperatureConvertor(32)