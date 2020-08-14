// Lexical scoping (Static scoping)
// Global scope - everything define outside all code blocks
// Local scope - everything define inside a code block

// In a scope, we can access variables in the current scope as well as
//    those in parent/anscestor scopes


let var1 = 'var1'

if (true) {
    console.log(var1)
    let var2 = 'var2'
    console.log(var2)
    if (true) let var4= 'var4'
}


if (true) {
    let var3 = 'var3'
}
console.log(var2)