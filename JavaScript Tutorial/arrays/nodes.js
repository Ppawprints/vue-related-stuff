const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Cancun'
}, { 
    title: 'Make latte',
    body: 'Learn latte art'
}, {
    title: 'Play with Shima',
    body: 'Train him to shake feet'
}, { 
    title: 'Learn latte art',
    body: 'Make latte'
}]
/* const findNote = function(notes, noteTitle) {
    const index = notes.findIndex(function(note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]

const findNote = function(notes, noteTitle) {
    return notes.find(function(note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

console.log(findNote(notes, 'my next trip'))
} */

const findNotes = function(notes, query) {
    const queryLowerCase = query.toLowerCase()
    return notes.filter(function(note){
        return (note.title.toLowerCase().includes(queryLowerCase) || note.body.toLowerCase().includes(queryLowerCase))
})}

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
        return 0
    })
}
console.log(notes)
sortNotes(notes)
console.log(notes)