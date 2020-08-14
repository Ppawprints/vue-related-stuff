/*
let temp = 6

if (temp < 60 || temp > 90) {
    console.log('It is not nice out.')
}

*/

let isGuestOneVegan = false
let isGuesttwoVegan = true

if (isGuestOneVegan && isGuesttwoVegan) {
    console.log('Vegan food only')
} else if (isGuestOneVegan || isGuesttwoVegan) {
    console.log('Some vegan food and some not')
} else console.log('Any food is fine')