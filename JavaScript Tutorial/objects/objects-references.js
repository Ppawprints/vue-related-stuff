let myAccount = {
    name: 'Yialn Dong',
    expenses: 100,
    income: 200
}

let addExpense = function(account, amount) {
    account.expenses += amount
}

let addIncome = function(account, income) {
    account.income += income
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `The account of ${account.name} has $${balance} balance, $${account.expenses} expenses, and $${account.income} income.`
}

console.log(getAccountSummary(myAccount))

addIncome(myAccount, 300)
addExpense(myAccount, 100)

console.log(getAccountSummary(myAccount))

resetAccount(myAccount)

console.log(getAccountSummary(myAccount))