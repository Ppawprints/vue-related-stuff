/* let name = 'Yilan Dong'

console.log(name.length)
console.log(name.toLowerCase())

let password = 'dsjafkopa@ssworderw'

console.log(password.includes('password'))

let whiteSpace = '    ewf  we     '
console.log(whiteSpace + 'test')
console.log(whiteSpace.trim() + 'test')
*/

let password1 = 'dsjafkopassworderw'
let password2 = 'dsjafkopa@ssworderw'
let password3 = 'dsjafko'

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword(password1))
console.log(isValidPassword(password2))
console.log(isValidPassword(password3))