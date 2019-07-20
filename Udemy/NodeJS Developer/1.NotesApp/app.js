const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')

// console.log(chalk.red.bold(validator.isEmail('choxmiasd.com')))

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(args){
        notes.addNotes(args.title,args.body)
    }
})

//demandOption is to set required or not
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(args){
        notes.removeNotes(args.title)
    }
})

//This is required to return values from yargs
yargs.parse()