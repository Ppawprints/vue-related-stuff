const account = {
    name: 'Yilan Dong',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({description: description, amount: amount})
    },
    addIncome: function(description, amount) {
        this.income.push({description: description, amount: amount})
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })
        let totalIncome = 0
        this.income.forEach(function(_income) {
            totalIncome += _income.amount
        })
        let balance = totalIncome - totalExpenses
        return `${this.name} has $${totalExpenses} in expenses, $${totalIncome} in income, and $${balance} account balance.`
    }
}

console.log(account.getAccountSummary())

account.addExpense('Rent', 100)
account.addExpense('NS', 200)
account.addIncome('Salary', 100000)
console.log(account.getAccountSummary())

