const todos = [{
    text: 'Learn JS',
    completed: true
}, {
    text: 'Memorize GRE vocab',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}, {
    text: 'Play with Shima',
    completed: false
}, {
    text: 'Drink Water',
    completed: true
}]

console.log(todos)

/*
const deleteTodo = function(todos, task) {
    const index = todos.findIndex(function(item) {
        return task.toLowerCase() === item.text.toLowerCase()
    })
    if (index >= 0) todos.splice(index, 1)
}
deleteTodo(todos, 'exercise')
console.log(todos) 

const getTHingsToDo = function(todos) {
    return todos.filter(function(item) {
        return !item.completed
    })
}
*/

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed === b.completed) return 0
        if (a.completed) return 1
        return -1 
    })
}

sortTodos(todos)
console.log(todos)