const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('task',{
    description: {type: String, require: true, trim: true},
    completed: {type: Boolean, default: false}
})

// const mytask = new Task({
//     description: 'Choxmi',
//     completed: false
// })

// mytask.save().then((result)=>{
//     console.log(mytask + ' Should Be Same '+result)
// }).catch((error) => {
//     console.log('Error occured '+error)
// })

module.exports = Task