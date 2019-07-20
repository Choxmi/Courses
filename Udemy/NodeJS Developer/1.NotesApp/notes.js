const fs = require('fs')
const chalk = require('chalk');

const getNotes = (title) => {
    const notes = loadNotes()
    const noteSingle = notes.find((note) => note.title === title)
    if(noteSingle){
        console.log(chalk.green(noteSingle.body))
    } else {
        console.log(chalk.red('Not found'))
    }
}
debugger
const removeNotes = (title) => {
    const notes = loadNotes()
    // notes.forEach(function(note, index, obj) {
    //     if(note.title == title){
    //         obj.splice(index,1)
    //     }
    // })
    const noteaval = notes.filter((note) => note.title !== title)

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
    const duplicates = notes.filter((note) => note.title === title)

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

const listNotes = () => {
    const notes = loadNotes()
    // notes.foreach((note) => console.log(chalk.red("UrNote") + '\n' + chalk.green(note.title)+'\n'+note.body))
    console.log(chalk.red("UrNotes"))
    notes.forEach((note) =>console.log('\n' + chalk.green(note.title)+'\n'+note.body))
}

const saveNotes = (notes) => {
    fs.writeFileSync('./data/data.json', JSON.stringify(notes))
}

const loadNotes = () => {
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
    removeNotes: removeNotes,
    listNotes: listNotes
}    