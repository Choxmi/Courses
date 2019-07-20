const fs = require('fs')
const chalk = require('chalk');

const getNotes = function() {

}

const removeNotes = function(title) {
    const notes = loadNotes()
    // notes.forEach(function(note, index, obj) {
    //     if(note.title == title){
    //         obj.splice(index,1)
    //     }
    // });
    const noteaval = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length !== noteaval.length){
        console.log(chalk.green.bold('Note removed'))
    } else {
        console.log(chalk.red.bold('No Note removed'))
    }

    console.log(noteaval)
    saveNotes(noteaval)
}

const addNotes = function(title, body) {
    const notes = loadNotes()
    const duplicates = notes.filter(function(note){
        return note.title === title
    })

    if(duplicates.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note added')
    } else {
        console.log('Title exist')
    }
}

const saveNotes = function(notes) {
    fs.writeFileSync('./data/data.json', JSON.stringify(notes))
}

const loadNotes = function() {
    try {
        const readStream = fs.readFileSync('./data/data.json')
        console.log(readStream.toString())
        return JSON.parse(readStream.toString())
    } catch(e) {
        console.log(e)
        fs.writeFileSync('./data/data.json',null)
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}    