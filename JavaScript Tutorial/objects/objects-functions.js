/* let myBook = {
    title: 'Educated',
    author: 'Tara Westover',
    pageCount: 344
}

let otherBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let getSummary = function (book) {
    return {
        summary: `${book.title} is by ${book.author}.`,
        pageCountSummary: `${book.title} has ${book.pageCount} pages.`
    }
}

console.log(getSummary(myBook).summary) */

let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

console.log(convertFahrenheit(50))
